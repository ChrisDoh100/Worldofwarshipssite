import React from "react";
import Header from "./Header";
import './register.css';

const RegisterPage=()=>{
    return(
        <>
        <Header DisplayLogin={true} DisplayRegisterPage={false}></Header>
            <div className="registerpagecontainer">
                <div className="registerbox">
                    <h1 className="registertitle">Register:</h1>
                    <div className="usercreation">
                        <p className="usertext">Username:</p>
                        <input placeholder="Username:" onChange={()=>handleUserChange(event)}></input>
                        <p>Email:</p>
                        <input placeholder="Email:" ></input>
                        <p>Password:</p>
                        <input placeholder="Password:"></input>
                        <p>Password(Again):</p>
                        <input placeholder="Password:"></input>
                        <div className="button">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default RegisterPage