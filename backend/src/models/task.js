import mongoose  from "mongoose";

//Task scheme is the name for a new model in moongoose 
const taskSchema = new mongoose.Schema({
    // Always need the data we are describing with a name and the type it is and if it is required 
    title:{type: String, required: true}, 
    time: {type: Date, required: true},
    body: {type: String}, },

    {timestamps: true}
); 

//After u finish defining what type of task schema you have. Your going to create the task object with the mongoose.model 
const task = mongoose.model("Task", taskSchema); 

export default task; 
















