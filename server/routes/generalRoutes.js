import express from "express";
import { getCategories } from "../controllers/general";
const router = express.Router();


router.get("/categories", getCategories );

export default router;