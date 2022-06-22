import cakeRepository from "../repositories/cakeRepository.js";
import chalk from "chalk";

export async function createCake(req, res) {
    const cake = req.body;

    try{
       const isThereCake = await cakeRepository.getCakeByName(cake.name);
       if(isThereCake.rows[0]) return res.sendStatus(409);

       await cakeRepository.putCakeInDB(cake);
       res.status(201).send(cake);
    }catch (error) {
        res.sendStatus(500);
        console.log(chalk.red(`There are errors in cakesController --> ${error}`));
    }
}