import db from "../../config/db.js";

async function putCakeInDB(cake) {
    db.query(`INSERT INTO cakes (name, price, description, image)
    VALUES ($1,$2,$3,$4)`, [cake.name,cake.price,cake.description,cake.image]);
};

async function getCakeByName(name) {
    const data = db.query(`SELECT * FROM cakes WHERE name=$1`,[name]);
    return data;
}

const cakeRepository = {
    putCakeInDB,
    getCakeByName,
}

export default cakeRepository;