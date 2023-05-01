import React from "react";
import Header from "./Header";
import './register.css';
import  {createUser}  from '../services/userService'
import { useState } from "react";
import { useContext } from "react";

const RegisterPage=()=>{
    const [username,setUserName] = useState('');
    const [hashedpassword,setPassword] = useState('');
    const [notifications,setNotifications] = useState('');

    const handleUserChange = (event)=>{
        setUserName(event)
        console.log("username",username)
    }
    const handlePassChange = (event)=>{
        setPassword(event)
        console.log("password",hashedpassword)
    }
    const RegisterUser = async ()=>{
        try{
            console.log("username",username)
            console.log("hashedpassword",hashedpassword)
            const apply = await createUser({username,hashedpassword})
                                .catch(error=>{
                                    setNotifications(error)
                                    setTimeout(()=>{
                                        setNotifications('')
                                    },2000)
                                },[])
            
        }catch(error){
            console.log(error)
        }
        setPassword('');
        setUserName('')
    }
    return(
        <>
        <Header DisplayLogin={DisplayLogin} DisplayRegisterPage={DisplayRegisterPage} loggedin={loggedin}></Header>
            <div className="registerpagecontainer">
                <div className="registerbox">
                    <h1 className="registertitle">Register:</h1>
                    <div className="usercreation">
                        <p className="usertext">Username:</p>
                        <input placeholder="Username:" onChange={({target})=>handleUserChange(target.value)}></input>
                        <p>Password:</p>
                        <input placeholder="Password:" onChange={({target})=>handlePassChange(target.value)}></input>
                        <p>Password(Again):</p>
                        <input placeholder="Password:"></input>
                        <div className="button">
                            <button onClick={RegisterUser}>Submit</button>
                        </div>
                        {notifications}
                    </div>
                </div>
            </div>
        </>
    )


}
export default RegisterPage