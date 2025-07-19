import express from "express";
import helmet from "helmet";
import morgan from 'morgan'

const app = express();


app.use(morgan("dev"))
app.use(helmet())

app.get('/',(req,res) =>{
return res.send("Hare")
})

app.listen(8000, () => {
  console.log(`Server running at http://localhost:8000`);
});
