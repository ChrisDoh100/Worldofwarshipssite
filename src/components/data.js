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
        <>
        <Header/>
            <div className="nameanimation">
                <h1 className="name">{name}</h1>
            </div>
            <div className="main">
                <div className="leftmenu">
                    <h2 className="leftmenuheader">Data</h2>
                    {Object.keys(whateverthefuckthisis).map(value=><p key={value}>{value}</p>)}
                </div>
                <div className="playerdata">
                    <h1 className="titlecontent">Here is the title of the Statistic</h1>
                    <p className="pcontent">here we begin to discribe the data and the story thhcjakdhaskjhdjashdjkhasjkdhaskjhdkahdkhaskdhe describes the actual statistics.</p>
                </div>
                <div className="rightmostcontent">
                    some random shit

                </div>
            </div>
        </>
    )
}

export default DataDisplay;