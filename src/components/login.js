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
        <Header DisplayLoginPage={false} DisplayRegisterPage={true}></Header>
        <div className="loginpagecontainer">
                <div className="loginbox">
                    <h1 className="TitleLogin">Login:</h1>
                    <p>Username:</p>
                    <input placeholder="Username:" onChange={()=>handleUserChange(event)}></input>
                    <p>Password:</p>
                    <input placeholder = "Password:"onChange={()=>handlepasswordChange(event)}></input>
                    <div className="button">
                        <button onClick={()=>checkcreditentials({username,password})}>Submit!</button>
                    </div>
                </div>
        </div>

        </>
    )
}
export default LoginPage;