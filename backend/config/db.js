import mongoose from "mongoose";
import { createTextIndex } from "../services/indexer.js";

export const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
        await createTextIndex();
        console.log('Created text index');
    } catch (error) {
        console.log("Database Connection failed ",error);
        process.exit(1);
    }
}