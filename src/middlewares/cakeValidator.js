export default function cakeValidator(schema) {
    return (req, res, next) => {
        const cake = req.body;

        const { error } = schema.validate({ cake }, { abortEarly: false });

        if(error) {
            return res.status(410).send(error.details.map((e) => e.message));
        };

        next();
    }
    
}
