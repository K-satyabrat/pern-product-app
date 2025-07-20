import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
);

// psql 'postgresql://neondb_owner:npg_7PnCxk9QcNri@ep-solitary-cake-a1mcbp4q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
