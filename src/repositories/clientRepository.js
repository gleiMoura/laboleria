import db from "../../config/db.js";

async function putClientInDB (client) {
    db.query(`INSERT INTO clients (name, address, phone)
    VALUES ($1, $2, $3)`, [client.name, client.address, client.phone]);
}

const clientRepository = {
    putClientInDB,
}

export default clientRepository;