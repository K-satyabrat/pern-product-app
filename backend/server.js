import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1, // each request consume 1 token
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ error: "too many requests" });
      } else if (decision.reason.isBot) {
        return res.status(403).json({
          error: "bot",
        });
      } else {
        return res.status(403).json({ error: "Forbiden" });
      }
      return;
    }

    // check for spoofed bots
    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      res.status(403).json({ error: "Spoofed bot detected" });
      return;
    }

    next();
  } catch (error) {
    console.log("Arcjet error", error);
    next(error);
  }
});

app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  return res.send("Hare");
});

async function initDB() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;
    console.log("Database initialised successfully");
  } catch (error) {
    console.log("database initialising error", error);
  }
}
initDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:8000`);
});
