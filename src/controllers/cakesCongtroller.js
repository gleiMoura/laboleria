import cakeRepository from "../repositories/cakeRepository.js";
import flavourRepository from "../repositories/flavourRepository.js";
import chalk from "chalk";

export async function createCake(req, res) {
    const cake = req.body;

    try{
       const isThereCake = await cakeRepository.getCakeByName(cake.name);
       const isThereImage = await cakeRepository.getCakeByImage(cake.image);
       const isThereFlavour = await flavourRepository.lookForId(cake.flavourId);


       if(isThereCake.rows[0] || isThereImage.rows[0]) return res.sendStatus(409);

       if(isThereFlavour.rowCount === 0) return res.status(404).send("This flavour id doesn't exist in database");

       await cakeRepository.putCakeInDB(cake);
       res.status(201).send(cake);
    }catch (error) {
        res.sendStatus(500);
        console.log(chalk.red(`There are errors in cakesController --> ${error}`));
    }
}