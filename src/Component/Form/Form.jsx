import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import './Form.css';
const FormUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        password: ""
    });

    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!user.name.trim() || !user.password.trim()) {
            setError("You need to write both user name & password");
            return;
        }
        if (user.password.length < 6) {
            setError("password should be more than 6 characters");
            return;
        }
        setError("");
        
        localStorage.setItem("userData", JSON.stringify( user ));
        console.log("form submitted", { user });
        navigate('/ToDo');

    }
    return (
        <>
            <div className="form-validation">
                  <h1>Sign in</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="userName">
                    <label htmlFor="">user name</label>
                    <input type="text" value={user.name} name='userName' onChange={(e)=>{setUser({...user,name:e.target.value})}} />
                </div>
                <div className="password">
                    <label htmlFor="">password</label>
                    <input type="password" value={user.password} name='password' onChange={(e)=>{setUser({...user, password:e.target.value})}} />
                </div>
                <p style={{ color:" red", marginTop: "20px" }}>{error}</p>
                <button type="submit">Submit</button>
            </form>
          </div>
        </>
    )
}
export default FormUser