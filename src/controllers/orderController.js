import orderRepository from "../repositories/orderRepository.js";
import chalk from "chalk";

export async function sendOrder(req, res) {
    const { clientId, cakeId, quantity,totalPrice } = req.body;

    try {
        const name = await orderRepository.getClientById(clientId);
        const cake = await orderRepository.getCakeById(cakeId);
        if (name.rowCount === 0 || cake.rowCount === 0) return res.sendStatus(404);

        await orderRepository.putOrderInDB(clientId, cakeId, quantity, totalPrice);
        res.status(201).send({ clientId, cakeId, quantity, totalPrice });
    } catch (error) {
        res.sendStatus(500);
        console.log(chalk.red(`There is some error in orderController ---> ${error}`));
    }


}