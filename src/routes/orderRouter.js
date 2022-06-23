import { Router } from "express";
import { registerOrder } from "../controllers/orderController.js";
import { sendAllOrders } from "../controllers/orderController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/orderSchema.js";
import { sendOrdersById } from "../controllers/orderController.js";
import { sendAllClientOrders } from "../controllers/orderController.js";



const orderRouter = Router();

orderRouter.post("/order",schemaValidator(orderSchema), registerOrder);
orderRouter.get("/orders", sendAllOrders);
orderRouter.get("/orders/:id", sendOrdersById);
orderRouter.get("/clients/:id/orders", sendAllClientOrders)

export default orderRouter;