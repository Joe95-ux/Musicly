import express from "express";
import { getCategories } from "../controllers/general";
const router = express.router();


router.get("/categories", getCategories );