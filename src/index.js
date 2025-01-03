//1st simple method all constrians in one file
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
//import connectionDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config({
    path: './config.env'
}); // Load environment variables from the .env file

const app = express();

( async () => { 
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("error" , (error)=>{
        console.log("Error",error);
        throw error;
       })

       app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port,${process.env.PORT}`);  
       })
       
    } catch (error) {
        console.error("error",error);
        throw error;
    }
} )()