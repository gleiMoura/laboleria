import db from "../../config/db.js";

async function putCakeInDB(cake) {
    db.query(`INSERT INTO cakes (name, price, description, image, "flavourId")
    VALUES ($1,$2,$3,$4,$5)`, [cake.name,cake.price,cake.description,cake.image, cake.flavourId]);
};

async function getCakeByName(name) {
    const data = db.query(`SELECT * FROM cakes WHERE name=$1`,[name]);
    return data;
};

async function getCakeByImage(image) {
    return db.query(`SELECT * FROM cakes WHERE image=$1`, [image]);
}

const cakeRepository = {
    putCakeInDB,
    getCakeByName,
    getCakeByImage
}

export default cakeRepository;