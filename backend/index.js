import express from "express"
import dotenv from "dotenv";
import connectMongoDB from "./config/mongodb.js";
import connectNeonDB from "./config/neondb.js";


const app = express();

dotenv.config();
connectMongoDB();
connectNeonDB();


app.listen(process.env.PORT, () => {
    console.log("Server running on port: " + process.env.PORT);
});


app.get("/", (req, res) => {
    res.send("Hello from port: " + process.env.PORT);
});