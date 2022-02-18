import axios from "axios";
import React, { useEffect } from "react";
import { getStory } from "../HelperFiles/getStory";
import { setStory } from "../reducers/storyReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DataFilter } from "../HelperFiles/Datafilter";
import './data.css'
import Header from "./header";

const DataDisplay= ()=>{
    const dispatch = useDispatch()
    const story = useSelector(state=>state);

    useEffect(async ()=>{
        const stories = await getStory();
        dispatch(setStory(stories))
    },[dispatch])
    const cleanstory=story[1];
    const  {state}  = useLocation();
    const [truepadding,setTruePadding] = useState(220);
    let data = {}
    data=state;
    let name = state.name;
    let whateverthefuckthisis=DataFilter(data.data)
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
                <p className="pcontent">{cleanstory}</p>
            </div>
        </>
    )
}

export default DataDisplay;