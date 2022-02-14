import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DataFilter } from "../datafilter/helperfunctions";
import './data.css'
import Header from "./header";

const baseUrl = "http://localhost:3001/"
const DataDisplay= ()=>{
    const  {state}  = useLocation();
    const [truepadding,setTruePadding] = useState(220);
    const [story,setStory] = useState(" ");
    const onSubmit = async()=>{
        const storyfetch = await axios.get(`${baseUrl}${name}`)
                        .then(res=>res.data[0])
                        .catch(error=>console.log(error))
        setStory(storyfetch.distance)
    }
    //console.log("state",{state})
    //onclick 
    //setStory(storyfetch)
    let data = {}
    data=state;
    let name = state.name;
    //console.log(name);
    let output = data;
    //console.log(output)
    const entries = output.data
    let whateverthefuckthisis=DataFilter(entries)
    //console.log(whateverthefuckthisis)
    window.addEventListener("scroll",()=>{
        if((220-window.scrollY)<0){
            setTruePadding(0);
        }else{
            setTruePadding(220-window.scrollY);
        }
        console.log(truepadding);
    });
    
    return(
        <>
        <Header/>
            <div className="nameanimation">
                <h1 className="name">{name}</h1>
            </div>
            <div className="leftmenu" id="sidenav">
                <div id="leftmenuinner" className="leftmenuinner" style={{"paddingTop":truepadding+"px"}}>
                    <div className="leftmenuinnerinner">
                        <h2 className="leftmenuheader">Data</h2>
                        {Object.keys(whateverthefuckthisis).map(value=><p key={value}>{value}</p>)}
                    </div>
                </div>
            </div>
            <div className="playerdata">
                <h1 className="titlecontent">Here is the title of the Statistic</h1>
                <p className="pcontent"><button onClick={onSubmit}>Show Interesting Story</button>{story}</p>
            </div>
        </>
    )
}

export default DataDisplay;