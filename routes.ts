import { Router } from "express";
import userRoutes from "./routes/userRoutes";

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get("/", (req, res) => {
  res.json({
    app: "Node Typescript",
    apiVersion: "0.1",
  });
});

router.use("/users", userRoutes);

export default router;
