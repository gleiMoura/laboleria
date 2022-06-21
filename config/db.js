import pg, { Pool } from "pg";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const { Pool } = pg;

const configDatabase = { connectionString: process.env.DATABASE_URL };

if (process.env.MODE === "PROD") { //This lines are to deploy with heroku
    configDatabase.ssl = { rejectUnauthorized: false }
  }

console.log(chalk.green("DATABASE IS CONNECTED"));

const db = new Pool(configDatabase);

export default db;

