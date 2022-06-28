import db from "../../config/db.js";

async function putCakeInDB(cake) {
    db.query(`INSERT INTO cakes (name, price, description, image, "flavourId")
    VALUES ($1,$2,$3,$4,$5)`, [cake.name,cake.price,cake.description,cake.image, cake.flavourId]);
};

async function getCakeByName(name) {
    const data = db.query(`SELECT c.name, c.price, c.description, c.image, f.name AS flavour 
    FROM cakes c
    JOIN flavours f
    ON f.id = c."flavourId"
    WHERE c.name=$1`,[name]);
    return data;
};

const cakeRepository = {
    putCakeInDB,
    getCakeByName,
}

export default cakeRepository;