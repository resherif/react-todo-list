import Todos from '../model/todosDB.js' ;
export const getAlltasks = async (req, res) => { 
    const todos = await Todos.find({})
    res.json({
        "message": "Here's the todo list",
        success: true,
        todos
    })

}
export const getTaskById = async (req, res) => { 
    const { taskId } = req.params;
    const Task=await Todos.findById(taskId)

    if (!Task) {
        return res.status(404).json({ 
            success: false,
            message: "Task not found" 
        });
    }
    res.json({
        data: Task
    })
}
export const deleteTodo = async (req, res) => { 
    const { taskId } = req.params;
    const deletedTask = await Todos.findByIdAndDelete(taskId);
    if (!deletedTask) { 
        return res.status(404).json({
            success: false, message: "Task not found"
        })
    }
    res.json({
        "message": `deleted`,
        success:true,
        tasks: deletedTask,

    })
}
export const editTasks = async (req, res)=>{ 
    const { taskId } = req.params;
    const { todoName, TodoStatus } = req.body;
    const updatedTask = await Todos.findByIdAndUpdate(taskId, {todoName,TodoStatus}, {
        new: true,
        runValidators: true
    })
    if (!updatedTask) { 
        return res.status(404).json({
            message:"Task not found"
        })
    }
    res.status(201).json({
        message: "Task updated successfully",
        data:updatedTask
    })
}
export const AddTask = async (req, res) => { 
    const { todoName, TodoStatus } = req.body;

    const newTask = await Todos.create({todoName,TodoStatus});
    res.status(201).json({
        message: "New Task Added successfully!",
        newTask
    })
}