import express from "express";
import env from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import { connectDB } from "../config/db.js"



env.config()

const app = express();
//Backend and frontend to talk to eachtother 
app.use(cors())
//Connect the database 
connectDB(); 




//Middleware so that the backend thigns can use the json files given from the frontend. 
app.use(express.json())

app.use("/api/tasks", taskRoutes); 

//Syntax for listening and starting the app 
app.listen(5001, () => {
    console.log("App successfully created")


}); 

