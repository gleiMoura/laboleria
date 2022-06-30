import db from "../../config/db.js";

async function getClientById(clientId) {
    return db.query(`SELECT id FROM clients WHERE id=$1`, [clientId]);
};

async function getCakeById(cakeId) {
    return db.query(`SELECT id FROM cakes WHERE id=$1`, [cakeId]);
};

async function putOrderInDB (clientId, cakeId, quantity, totalPrice) {
    db.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") 
    VALUES ($1, $2, $3, $4)`, [clientId, cakeId, quantity, totalPrice]);
};

async function getAllOrders(queryStringText) {
    return db.query(`SELECT cl.id AS "clientId", cl.name AS "clientName", cl.address AS address, cl.phone AS phone, ca.id as "cakeId", ca.name AS "cakeName", ca.price AS price, ca.description AS description, ca.image AS image, f.name AS flavour, o."createAt" AS "createAt", o.quantity AS quantity, o."totalPrice" AS totalPrice, o.id AS "orderId", o."isDeliveryed"
    FROM orders o
    JOIN clients cl ON o."clientId" = cl.id
    JOIN cakes ca ON o."cakeId" = ca.id 
    JOIN flavours f ON ca."flavourId" = f.id
    ${queryStringText}`)
};

async function lookForOrder (id) {
    return db.query(`SELECT * FROM orders WHERE id=$1`, [id]);
};

async function updateDelivery(id) {
    db.query(`UPDATE order SET "isDeliveryed"=TRUE WHERE id=$1`, [id]);
}


const clientRepository = {
    getClientById,
    getCakeById,
    putOrderInDB,
    getAllOrders,
    lookForOrder,
    updateDelivery
}

export default clientRepository;