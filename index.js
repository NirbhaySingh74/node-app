import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "server is running correctly" });
});
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
