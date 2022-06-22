import orderRepository from "../repositories/orderRepository.js";
import chalk from "chalk";

export async function registerOrder(req, res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body;

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

export async function sendAllOrders(req, res) {
    let logicDate="";
    if (req.query.date) {
        logicDate = `WHERE "createAt"='${req.query.date}'`;
    }

    try {
        const orders = await orderRepository.getAllOrders(logicDate);

        if (orders.rowCount === 0) return res.status(404).send([]);

        const allOrders = orders.rows.map(element => {
            return(
                {
                    "client": {
                        id: element.clientId,
                        name: element.clientName,
                        address: element.eddress,
                        phone: element.phone
                    },
                    "cake": {
                        id: element.cakeId,
                        name: element.cakeName,
                        price: element.price,
                        description: element.description,
                        image: element.image
                    },
                    "createAt": element.createAt,
                    "quantity": element.quantity,
                    "totalPrice": element.totalPrice
                }
            )
        });

        res.status(200).send(allOrders)
    } catch (errors) {
        res.sendStatus(500);
        console.log(chalk.red(`There is errors in order controller ----> ${errors}`))
    }
}