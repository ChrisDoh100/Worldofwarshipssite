import React from "react";
import Header from "./Header";
import './register.css';
import  {createUser}  from '../services/userService'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../services/userService";
import { useDispatch } from "react-redux";
import { displayloggedintruey } from "../reducers/loggedinReducer";
import { displayloginfalsey } from "../reducers/displayloginreducer";
import { displayregisterfalsey } from "../reducers/displayregisterpagereducer";
import { updateUsername } from "../reducers/displayusername";

const RegisterPage=()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            console.log(apply)
            if(apply){
                setNotifications("Registration Successful! Redirecting to main page...")
                setTimeout(()=>{
                    setNotifications('')
                },1000)
                const registeredlogin = await UserLogin({username:apply.username,password:hashedpassword}).catch(error=>{
                    setNotifications("There was an error logging you in, please try again from the main page!.")
                    setTimeout(()=>{
                        setNotifications('')
                    },1000)
                })
                dispatch(displayloggedintruey())
                dispatch(displayloginfalsey())
                dispatch(displayregisterfalsey())
                dispatch(updateUsername(registeredlogin.username))
                navigate('/')
            }
            
        }catch(error){
            console.log(error)
        }
        setPassword('');
        setUserName('');
        //history('/');
    }
    return(
        <>
        <Header></Header>
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