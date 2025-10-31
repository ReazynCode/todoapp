import Task from "../models/task.js"; 
//Export async function is the function that guarantees it works and exports the results.
//For this get we want the id and print out like extra details about this specific task 
export async function getTask(req,res) {
    try{
        //We are going to fetch the body of the task or more information related to the task from the database. 
        const task = await Task.findById(req.params.id)
        if (!task)
            return res.status(404).json({message: "Unable to retrieve a body from this specific task"}); 
        return res.status(200).json(task); 
       


    }catch(error){
        console.error("This task was not able to be retrieved", error); 
        return res.status(500).json({message: "No such task was able to be retrieved "}); 
        
    }

}; 

    export async function deleteTask(req, res){
        try{
        const deletednode = await Task.findByIdAndDelete(req.params.id); 
        if (!deletednode)
            return res.status(500).json({message: "Task not able to be deleted"})
        
        return res.status(200).json({message: "Task sucessfully deleted"}); 

        }catch(error){
            console.error("Error in the deletion of the task", error)
            return res.status(404).json({message: "Task not able to be found to be deleted"})

        }
       
    }; 

    export async function createTask(req, res){
        try{
            const{title, time, body} = req.body
            const node = new Task({title: title, time: time , body: body}); 
            if (!title || !time){
                return res.status(400).json({message:"Fill in the missing requirement!"})
            }
            //Save after it is created 
            await node.save()
            return res.status(201).json(node); 
        } catch(error){
            console.error("Error in creation of creating a task", error); 
            return res.status(500).json({message:"Error in creation of the task"})
        }
    }

    export async function updateTask(req,res){
        try{
            //
            const update = req.body
            const updated = await Task.findByIdAndUpdate(req.params.id, update,{
                //This means that we are going to make this useable from the new updated values 
                new: true
            })

            if (!updated)
                return res.status(404).json({message:"Task was unable to be found to delete"}); 
            
            return res.status(200).json({message: "Task was able to me sucessfully updates"}); 

        }catch(error){
            console.error("Error detected")
            return res.status(500).json({message:"Error in updating the task"}, error)

        }
    }; 

    export async function getAllTasks(req, res){
        try{
            const tasks = await Task.find()
            if(!tasks || tasks.length == 0){
                return res.status(404).json({message:"No tasks were found"}); 
            }
            return res.status(200).json(tasks); 
        } catch(error){
            console.error("There was an issue trying to find the tasks", error)
            return res.status(500).json({message: "Error trying to get all of the tasks"})
        }
    };
