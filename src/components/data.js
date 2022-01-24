import React from "react";
import { useLocation } from "react-router-dom";
import { DataFilter } from "../datafilter/helperfunctions";



const DataDisplay=()=>{
    const  {state}  = useLocation();
    let data = {}
    data=state;
    let output = data;
    const entries = output.data.statistics
    let whateverthefuckthisis=DataFilter(entries)
    console.log(whateverthefuckthisis)
    //do some more work on what kind of data actually want to display
    // then think of how to output that data.
    return(
        <div>
           <p>{}</p>
        </div>
    )
}

export default DataDisplay;