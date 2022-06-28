import joi from "joi";

const cakeSchema = joi.object({
    "name": joi.string()
        .min(3)
        .max(30)
        .required(),

    "price": joi.number()
        .required(),

    "description": joi.string(),

    "image": joi.string()
        .uri()
        .required(),
    
    "flavourId": joi.number()
        .required(),
});

export default cakeSchema;