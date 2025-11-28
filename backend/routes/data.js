
import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getCovidData } from "../controllers/dataController.js";

const router = express.Router();

router.get("/covid", auth, getCovidData);

export default router;
