import { Router } from "express";
import { getAll } from "./todo.controller";

const router = Router();

router.get("/api/server", getAll);

export default router;
