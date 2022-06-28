import flavourRepository from "../repositories/flavourRepository.js";

export default function flavorValidator(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        const id = flavourRepository.lookForId(req.flavorId);

        if(validation.error) {
            return res.status(400).send(validation.error.details);
        };

        if(id.rowCount === 0) return res.sendStatus(404);

        next()
    }
}