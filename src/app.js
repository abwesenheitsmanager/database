import express from "express";
import dotenv from "dotenv";
import path from "path";

/**
 * Config for dotenv to find the .env file
 */
dotenv.config({ path: path.join(process.cwd(), '../.env')});

const app = express();
const PORT = process.env.PORT || 3000;


/**
 * Starting listening on this PORT
 */
app.listen(PORT, () => {
    console.log(`Server ist running on port ${PORT}...`);
});