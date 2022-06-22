import db from "../../config/db.js";

async function getClientById(clientId) {
    return db.query(`SELECT id FROM clients WHERE id=$1`, [clientId]);
}

async function getCakeById(cakeId) {
    return db.query(`SELECT id FROM cakes WHERE id=$1`, [cakeId]);
}

async function putOrderInDB (clientId, cakeId, quantity, totalPrice) {
    db.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") 
                VALUES ($1, $2, $3, $4)`, 
                [clientId, cakeId, quantity, totalPrice]);
}

const clientRepository = {
    getClientById,
    getCakeById,
    putOrderInDB
}

export default clientRepository;