export default function schemaValidator(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })
        if(validation.error) {
            return res.status(410).send(validation.error.details);
        }
        next();
    }
    
}