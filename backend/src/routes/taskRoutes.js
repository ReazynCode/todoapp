import express from "express";
import {getTask, createTask, updateTask, deleteTask, getAllTasks} from "../controllers/taskcontrollers.js";

const router = express.Router(); 


router.get("/:id", getTask); 
router.put("/", createTask); 
router.post("/:id", updateTask)
router.delete("/:id", deleteTask); 
router.get("/", getAllTasks); 


export default router; 
//use this if not using the module package. If using module package I would use expo 


