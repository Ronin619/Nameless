require("dotenv").config({ path: "./.env" });
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 4000;
//Middleware
app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
