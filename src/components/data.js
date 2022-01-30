import React from "react";
import { useLocation } from "react-router-dom";
import { DataFilter } from "../datafilter/helperfunctions";
import './data.css'
import Header from "./header";



const DataDisplay=()=>{
    const  {state}  = useLocation();
    console.log("state",{state})
    let data = {}
    data=state;
    let name = state.name;
    console.log(name);
    let output = data;
    console.log(output)
    const entries = output.data
    let whateverthefuckthisis=DataFilter(entries)
    console.log(whateverthefuckthisis)
    
    return(
        <div className="containers">
            <Header/>
            <div className="nameanimation">
                <h1 className="name">{name}</h1>
            </div>
            <div className="box">
                <div className="upperleft"></div>
                <div className="upperright"></div>
                <div className="bottomleft"></div>
                <div className="bottomright"></div>
            </div>
        </div>
    )
}

export default DataDisplay;