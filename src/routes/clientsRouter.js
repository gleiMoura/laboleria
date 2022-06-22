import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator.js"
import clientSchema from "../schemas/clientSchema.js";
import { createClient } from "../controllers/clientsController.js";

const clientsRouter = Router();

clientsRouter.post("/clients", schemaValidator(clientSchema), createClient);

export default clientsRouter;