const express = require("express");

const auth = require("../middleware/authMiddleware");
const { getCovidData } = require("../controllers/dataController");

console.log("[DEBUG] typeof auth:", typeof auth);
console.log("[DEBUG] typeof getCovidData:", typeof getCovidData);

const router = express.Router();

router.get("/covid", auth, getCovidData);

module.exports = router;
