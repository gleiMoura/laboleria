import db from "../../config/db.js";

async function putFlavourInDB(name) {
    db.query(`INSERT INTO flavours (name) VALUES ($1)`, [name]);
};

async function isThereFlavorInDB(name) {
    return db.query(`SELECT * FROM flavours WHERE name=$1`, [name]);
};

async function lookForId(id) {
    return db.query(`SELECT * FROM flavours WHERE id=$1`, [id]);
};

const flavourRepository = {
    putFlavourInDB,
    isThereFlavorInDB,
    lookForId
};

export default flavourRepository;