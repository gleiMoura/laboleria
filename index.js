import chalk from "chalk";
import app from "./src/app/index.js"
import dotenv from "dotenv";
dotenv.config;

const port = process.env.PORT

app.listen(port, () => {
    console.log(chalk.green("Server is running on port: " + process.env.PORT))
});