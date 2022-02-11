import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DataFilter } from "../datafilter/helperfunctions";
import './data.css'
import Header from "./header";



const DataDisplay=()=>{
    const  {state}  = useLocation();
    const [truepadding,setTruePadding] = useState(220);
    //console.log("state",{state})
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
                <p className="pcontent">{Object.keys(whateverthefuckthisis).map(value=><p key={value}>{value}</p>)}</p>
            </div>
        </>
    )
}

export default DataDisplay;