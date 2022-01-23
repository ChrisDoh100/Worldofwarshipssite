import React from "react";
import { useLocation } from "react-router-dom";



const DataDisplay=()=>{
    const  {state}  = useLocation();
    let data = {}
    data=state;
    let output = data;
    console.log(output.data.statistics.pvp.main_battery);
    const entries = output.data.statistics.pvp
    Object.entries(entries).map((key,i)=>{
        console.log(key,i)
    })
    //do some more work on what kind of data actually want to display
    // then think of how to output that data.
    return(
        <div>
           {Object.entries(entries).map((key,i)=>{
               return(
                   <ul key={i}>{key[0]}{(typeof key[1]=='object' && key[1]!==null)?Object.entries(key[1]).map((key2,j)=>{
                       return(<ul key={j}>{key2}</ul>)
                   }):key[1]}</ul>
               )
           })}
        </div>
    )
}

export default DataDisplay;