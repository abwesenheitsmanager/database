import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '../.env')});

const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server ist running on port ${PORT}...`);
});