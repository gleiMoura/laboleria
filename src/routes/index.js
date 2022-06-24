import Router from "express";
import cakesRouter from "./cakesRouter.js";
import clientsRouter from "./clientsRouter.js";
import orderRouter from "./orderRouter.js";
import flavoursRouter from "./flavoursRouter.js"

const router = Router();

router.use(cakesRouter);
router.use(clientsRouter);
router.use(orderRouter);
router.use(flavoursRouter);

export default router;