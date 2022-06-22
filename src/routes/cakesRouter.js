import { Router } from "express";
import cakeValidator from "../middlewares/schemaValidator.js";
import cakeSchema from "../schemas/cakeSchema.js";
import { createCake } from "../controllers/cakesCongtroller.js";

const cakesRouter = Router();

cakesRouter.post("/cakes",cakeValidator(cakeSchema), createCake );

export default cakesRouter;