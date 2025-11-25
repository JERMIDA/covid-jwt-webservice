import express from "express";
import { login } from"../controllers/authController";
import router from express.Router();

router.post("/login", login);

module.exports = router;
