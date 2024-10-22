import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import connectDB from './database/conn.mjs';
import Country from './models/country.mjs';
import dotenv from 'dotenv';


// Setup
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3001;



// Connect to MongoDB
connectDB()


// Use body-parser middleware to parse JSON requests 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


// Listening on port 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
