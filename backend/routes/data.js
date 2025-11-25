import express  from"express";

import auth from "../middleware/authMiddleware";
import { getCovidData } from "../controllers/dataController";

console.log("[DEBUG] typeof auth:", typeof auth);
console.log("[DEBUG] typeof getCovidData:", typeof getCovidData);

const router = express.Router();

router.get("/covid", auth, getCovidData);

module.exports = router;
