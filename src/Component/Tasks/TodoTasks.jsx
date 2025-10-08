import AddTask from "../AddTask/AddTask";
import TodoBoard from "../TodoBoard/TodoBoard";
import './tasks.css'
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const TodoTasks = () => {
    const [tasks, setTasks] = useState(() => {
       return JSON.parse(localStorage.getItem("tasksData")) || [];
    });
    useEffect(() => {
  localStorage.setItem("tasksData", JSON.stringify(tasks));
    }, [tasks]);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");
    function handleAddTasks(text) {
        const newTask = { text, done: false };
         setTasks([...tasks, newTask]);
    }
    function handleDone(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    }
    function handleDelete(index) {
        const filtered = tasks.filter((_, i) => i !== index);
        setTasks(filtered);
    }
    function handleEdit(i) {
        setEditIndex(i);
        setEditText(tasks[i].text);
    }
    function handleSaveEdit(i) {
        const updatedTasks = [...tasks];
        updatedTasks[i].text = editText;
        setTasks(updatedTasks);
        setEditIndex("");
        setEditText("");
    }
    return (
        <>
            <div className="todo">              
            <TodoBoard tasks={tasks} />
                <AddTask onAddTask={handleAddTasks} />
                <ul className="tasks">
                    {tasks.map((task, i) => ( <li key={i}>
                        <div className="task-text">
                            <input type="checkbox" name="" id="" onClick={() => handleDone(i)} />
                            {editIndex === i ? (
                                <>
                                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} onKeyDown={(e) => {
                                        if (e.key === 'enter') handleSaveEdit(i); 
                                        
                                    }} />
                                      <button onClick={() => handleSaveEdit(i)}>Save</button>
                                        </>
                                
                            ) : (
                                     <span style={{ textDecoration: task.done ? "line-through" : "none" }}>{task.text}</span>
                        )}
                            {/* <span style={{ textDecoration: task.done ? "line-through" : "none" }}>{task.text}</span> */}
                            </div>
                        <div className="icons">
                            <button className="delete" onClick={()=>{handleDelete(i)}}><FontAwesomeIcon icon={faTrash} /></button>
                            {/* <button className="edit" onClick={()=>{handleEdit(i)}}><FontAwesomeIcon icon={faPenToSquare} /></button> */}
                             {editIndex !== i && (
        <button className="edit" onClick={() => handleEdit(i)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      )}
                            </div>
                        </li>)
                    
                    )}
                </ul>

            </div>
       </>
    )
}
 export default TodoTasks