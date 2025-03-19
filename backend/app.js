import express from "express";
import connectDB from "./config/mongodb.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

app.get("/", (req, res) => {
    res.send({ message: "Hello from backend" });
});
