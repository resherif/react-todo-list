import React, { useEffect, useState } from "react";
import './TodoBoard.css'
const TodoBoard = ({ tasks }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const doneCount = tasks.filter((t) => t.done).length;
  return (
    <>
      <div className="todoboard">
        <div className="container">
          <div className="content">
            {user ? <h3>welcome, {user.name}</h3> : <h3>welcome, Guest</h3>}
             <h3>To-DoList</h3>
            <p>keep it up</p>
            <div className="progress">
              <div className="progress-bar" style={{width:`${(doneCount/(tasks.length||1))*100}%`}}></div>
            </div>
          </div>
          <div className="circle">
            <p className="number">{doneCount}/{ tasks.length}</p>
          </div>
        </div>
      </div>
    </>
  )
};
export default TodoBoard;
