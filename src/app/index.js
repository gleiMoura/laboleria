import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../routes/index.js";
import db from "../../config/db.js";
import chalk from "chalk";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);

if(db) {
    console.log(chalk.green("Database is working"));
}else{
    console.log(chalk.red("Database is not working"))
}

export default app;
