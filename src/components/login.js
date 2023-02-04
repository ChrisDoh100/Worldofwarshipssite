import React from "react";
import Header from "./Header";
import './login.css'
import { useState } from "react";

const LoginPage = ()=>{
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const checkcreditentials=({username,password})=>{
        console.log(username,password);
    }
    const handleUserChange=(event)=>{
        setUserName(event.target.value);
        console.log("Username: ",username);
    }
    const handlepasswordChange=(event)=>{
        setPassword(event.target.value);
        console.log("Password: ",password);
    }
    return (
        <>
        <Header onLoginPage={TextTrackCueList}></Header>
        <div className="loginpagecontainer">
            <div className="username">
                <input placeholder="Username:" onChange={()=>handleUserChange(event)}></input>
            </div>
            <div className="password">
                <input placeholder = "Password:"onChange={()=>handlepasswordChange(event)}></input>
            </div>
            <button onClick={()=>checkcreditentials({username,password})}>Submit!</button>
        </div>

        </>
    )
}
export default LoginPage;