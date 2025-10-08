import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddTask.css'
export const AddTask = ({onAddTask}) => {
    const [newTasks, setNewTasks] = useState("");
    const handleAdd = () => {
        if (!newTasks.trim())
            return;
        onAddTask(newTasks);
        setNewTasks("");
    }
  return (
    <div className="addTask">
                <input type="text" value={newTasks} onChange={(e) => {
                    setNewTasks(e.target.value);
                }} />
                <button onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /></button>               
                </div>
  )
}
export default AddTask;