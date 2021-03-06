import orderRepository from "../repositories/orderRepository.js";
import chalk from "chalk";
import clientRepository from "../repositories/orderRepository.js";

export async function registerOrder(req, res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body;

    try {
        const name = await orderRepository.getClientById(clientId);
        const cake = await orderRepository.getCakeById(cakeId);
        if (name.rowCount === 0 || cake.rowCount === 0) return res.status(404).send("Don't find client name or cake");

        await orderRepository.putOrderInDB(clientId, cakeId, quantity, totalPrice);
        res.status(201).send({ clientId, cakeId, quantity, totalPrice });
    } catch (error) {
        res.sendStatus(500);
        console.log(chalk.red(`There is some error in orderController, function registerOrder ---> ${error}`));
    }
}

export async function sendAllOrders(req, res) {
    let logicDate = "";
    const { date } = req.query
    if (date) {
        logicDate = `WHERE "createAt"='${date}'`;
    }

    try {
        const orders = await orderRepository.getAllOrders(logicDate);

        if (orders.rowCount === 0) return res.status(404).send([]);

        const allOrders = orders.rows.map(element => {
            return (
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
                        image: element.image,
                        flavour: element.flavourg
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
        console.log(chalk.red(`There is errors in orderController, function sendAllOrders ----> ${errors}`))
    }
};

export async function sendOrdersById(req, res) {
    const { id } = req.params;
    const logicDate = `WHERE o.id='${id}'`;

    const regex = /[0-9]/;
    if (regex.test(id) === false) {
        return res.status(400).send("Par??metro inv??lido!!!")
    };

    try {
        const orders = await orderRepository.getAllOrders(logicDate);

        if (orders.rowCount === 0) return res.status(404).send([]);

        const allOrders = orders.rows.map(element => {
            return (
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
                    "totalPrice": element.totalPrice,
                }
            )
        });

        res.status(200).send(allOrders)
    } catch (error) {
        res.sendStatus(500);
        console.log(chalk.red("theres is something wrong in orderControler, function sendOrderById ----> " + error));
    }
};

export async function sendAllClientOrders(req, res) {
    const { id } = req.params;
    const logicDate = `WHERE cl.id='${id}'`;

    const regex = /[0-9]/;
    if (regex.test(id) === false) {
        return res.status(400).send("Par??metro inv??lido!!!")
    };

    try {
        const orders = await orderRepository.getAllOrders(logicDate);

        if (orders.rowCount === 0) return res.status(404).send([]);

        const allOrders = orders.rows.map(element => {
            return (
                {
                    "orderId": element.orderId,
                    "quantity": element.quantity,
                    "createAt": element.createAt,
                    "totalPrice": element.totalPrice,
                    "cakeName": element.cakeName,
                }
            )
        });

        res.status(200).send(allOrders)
    } catch (error) {
        res.sendStatus(500);
        console.log(chalk.red("theres is something wrong in orderControler, function sendClientOrders ----> " + error));
    }
};

export async function changeDelivery(req, res) {
    const { id } = req.params;
    
    const regex = /[0-9]/;
    if (regex.test(id) === false) {
        return res.status(400).send("Par??metro inv??lido!!!")
    };

    const idFromDB = await clientRepository.lookForOrder(id);
    if(idFromDB.rowCount === 0) return res.sendStatus(404);

    clientRepository.updateDelivery(id);
    res.sendStatus(204);
}