import express from "express";
import cors from "cors";
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/data", require("./routes/data"));

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});
