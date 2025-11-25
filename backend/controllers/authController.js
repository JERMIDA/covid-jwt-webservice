import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const USER = {
  username: "student",
  password: "123456"  // plain text for simplicity
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username !== USER.username) {
    return res.status(401).json({ error: "Invalid username" });
  }

  if (password !== USER.password) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = require("jsonwebtoken").sign(
    { username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login successful", token });
};
