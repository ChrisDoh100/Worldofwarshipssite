import axios from "axios";
import React, { useEffect } from "react";
import { getStory } from "../HelperFiles/getStory";
import { setStory } from "../reducers/storyReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DataFilter, DataAligner } from "../HelperFiles/Datafilter";
import './data.css'
import Header from "./header";

const DataDisplay= ()=>{
    const dispatch = useDispatch()
    const story = useSelector(state=>state);
    const [title,setTitle]=useState(" ");
    const [titlevalue,setTitlevalue] = useState(0);
    const [truepadding,setTruePadding] = useState(220);
    useEffect(async ()=>{
        const stories = await getStory();
        dispatch(setStory(stories))
    },[dispatch])
    const cleanstory=story[1];
    const  {state}  = useLocation();
    let data = {}
    data=state;
    let name = state.name;
    let whateverthefuckthisis=DataAligner(DataFilter(data.data))
    console.log({whateverthefuckthisis})
    window.addEventListener("scroll",()=>{
        if((220-window.scrollY)<0){
            setTruePadding(0);
        }else{
            setTruePadding(220-window.scrollY);
        }
        console.log(truepadding);
    });
    const Clicked=(somevalue)=>{
        console.log({somevalue})
        setTitle(somevalue);
        setTitlevalue(whateverthefuckthisis[somevalue])
        console.log("You're a dumfuck")
    }
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
                        {Object.keys(whateverthefuckthisis).map(value=><p onClick={()=>Clicked(value)} key={value} >{value}</p>)}
                    </div>
                </div>
            </div>
            <div className="playerdata">
                <h1 className="titlecontent">{title}{titlevalue}</h1>
                <p className="pcontent">{cleanstory}</p>
            </div>
        </>
    )
}

export default DataDisplay;