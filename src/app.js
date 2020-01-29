import express from "express";
import dotenv from "dotenv";
import path from "path";
import sequelize from "./config/database.config";
import {buildResponse} from "./helper/response";

/**
 * Config for dotenv to find the .env file
 */
dotenv.config({ path: path.join(process.cwd(), '../.env')});

const app = express();
const PORT = process.env.PORT || 3000;

async function testDatabase() {
    try {
        await sequelize.authenticate();
        console.log(buildResponse(true, "Database server is running"))
    } catch (e) {
        console.log(buildResponse(false, e));
    }
}

/**
 * Starting listening on this PORT
 */
app.listen(PORT, () => {
    console.log(`Server ist running on port ${PORT}...`);
    testDatabase();
});