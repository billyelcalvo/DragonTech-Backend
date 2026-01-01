import { Router } from "express";
import { createProductController } from "../controllers/createProductController.js";

const router = Router();

router.post('/', createProductController);


export default router;