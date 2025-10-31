
import mongoose  from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected sucessfully.")

    }catch(error){
        console.error(1)("Unable to connect to the database. ")
        process.exit(1) //This exits the app if the db is required. In the node.js package library 
    }
    
    
}; 