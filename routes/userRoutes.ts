import { Router } from "express";
import * as UserController from "../controller/users";

const router = Router();

router.get("/", UserController.fetchAll);
router.post("/", UserController.create);
router.get("/:id", UserController.findById);

export default router;
