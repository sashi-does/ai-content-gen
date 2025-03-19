import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";

const app = express();

dotenv.config();
connectDB();

app.listen(process.env.PORT, () => {
    console.log("Server running on port: " + process.env.PORT);
});

app.get("/", (req, res) => {
    res.send("Hello from port: " + process.env.PORT);
});