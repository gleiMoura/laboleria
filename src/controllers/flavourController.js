import chalk from "chalk";
import flavourRepository from "../repositories/flavourRepository.js";

export async function postFlavour(req, res) {
    const { name } = req.body;
    
    try{
        const isThereflavour = await flavourRepository.isThereFlavorInDB(name);
        if(isThereflavour.rowCount !== 0) return res.sendStatus(409)
        
        await flavourRepository.putFlavourInDB(name);
        res.status(201).send({ name });
    }catch (error) {
        res.sendStatus(500);
        console.log(chalk.red("There is something wrong in flavourController, in function putFlavourInDB ----> " + error))
    }
}