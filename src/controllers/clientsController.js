import chalk from "chalk";
import clientRepository from "../repositories/clientRepository.js";


export async function createClient (req, res) {

    const client = req.body;
    try{
        await clientRepository.putClientInDB(client);
        res.status(201).send(client);
    }catch (error) {
        res.sendStatus(500);
        console.log(chalk.red("There's something wrong in clientsController --->>> " + error))
    }
}