import Router from "express";
import flavourValidate from "../middlewares/flavourValidate.js"
import flavourSchema from "../schemas/flavourSchema.js";
import { postFlavour } from "../controllers/flavourController.js"

const flavoursRouter = Router();

flavoursRouter.post("/flavours", flavourValidate(flavourSchema),postFlavour);

export default flavoursRouter;