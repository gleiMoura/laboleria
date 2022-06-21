import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.listen(PORT, () => {
    console.log(chalk.green("API is working in port: " + process.env.PORT))
});