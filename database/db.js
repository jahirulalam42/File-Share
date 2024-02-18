import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const DBConnection = async () => {

    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;


    const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@project.rpqqtw1.mongodb.net/fileshare`
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while connecting with the database',error.message);
    }
}

export default DBConnection;