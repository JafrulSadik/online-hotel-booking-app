import mongoose from "mongoose";

export async function dbConnect(){
    try {
        const conn = await mongoose.connect(String(process.env.MONGODB_URI), {
            dbName: process.env.DB_NAME
        });
        return conn;
    } catch(err) {
        console.error(err);
    }
}