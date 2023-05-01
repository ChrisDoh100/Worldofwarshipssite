import React from "react";
import Header from "./Header";
import './login.css'
import { useState } from "react";
import {UserLogin} from '../services/userService'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displaylogintruey,displayloginfalsey } from "../reducers/displayloginreducer";
import { displayregisterfalsey,displayregistertruey } from "../reducers/displayregisterpagereducer";
import { updateUsername } from "../reducers/displayusername";

const LoginPage = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [notifications,setNotifications] = useState(null);

    useSelector(state=>console.log(state))
    const checkcreditentials= async ()=>{
        //attempt login
        console.log("button pressed")
        const attempt = await UserLogin({username,password})
                                .catch(error=>{

                                    setNotifications("Sorry there was an issue logging you in");

                                    setTimeout(()=>{

                                        setNotifications(null)
                                    },2000)

                                },[])
        dispatch(displayloginfalsey())
        dispatch(displayregisterfalsey())
        dispatch(updateUsername(attempt.username))

    }
    const handleUserChange=(event)=>{

        setUserName(event);

        console.log("Username: ",username);
    }

    const handlepasswordChange=(event)=>{

        setPassword(event);

        console.log("Password: ",password);

    }
    return (
        <>
        <Header></Header>

        <div className="loginpagecontainer">

                <div className="loginbox">

                    <h1 className="TitleLogin">Login:</h1>

                    <p>Username:</p>

                    <input placeholder="Username:" onChange={({target})=>handleUserChange(target.value)}></input>

                    <p>Password:</p>
                    <input placeholder = "Password:"onChange={({target})=>handlepasswordChange(target.value)}></input>

                    <div className="button">

                        <button onClick={checkcreditentials}>Submit!</button>

                    </div>

                    {notifications}

                </div>

        </div>

        </>
    )
}
export default LoginPage;