import { Router } from "express";
import { sendOrder } from "../controllers/orderController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/orderSchema.js";


const orderRouter = Router();

orderRouter.post("/orders",schemaValidator(orderSchema), sendOrder);

export default orderRouter;