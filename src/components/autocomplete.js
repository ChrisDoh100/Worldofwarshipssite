import React from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './autocomplete.css'
import {getPlayerNames,getPlayerData} from "../services/submission";
import { Alert } from "bootstrap";


const Autocomplete=()=>{
    let history = useNavigate();
    const [suggestions,setSuggestions]=useState([])




    const handleSubmit=async(username)=>{
        let data =await getPlayerData(username['account_id'])
                        .then(res=>res.data.data[username['account_id']].statistics)
                        .catch(err=>Alert("Apologies, Please Try Again Later!"))
        let name = String(username['nickname']);
        history(`/data/${name}`,{state:{data,name}})
    }
    const handleEvent=async(event)=>{
        event.preventDefault()
        let account_id =await getPlayerNames(event.target.value)
                                        .then(res=>res.data.data)
                                        .catch(err=>Alert("Apologies, Please Try Again Later!"))
        if(typeof account_id==="undefined"){
            setTimeout(()=>{
                setSuggestions([])
            },100)
        }else{
            setSuggestions(account_id.slice(0,5))
        }
    }
    return(
        <div className="containerauto">
            <Header/>
            <h1 className="title">World of Warships Stats</h1>
            <div className="autocomplete">
                <input type='text/css' placeholder="Username...." onChange={(event)=>handleEvent(event)} ></input>
                <ul>
                    {suggestions && suggestions.map((item,i)=><li key={i} onClick={()=>handleSubmit(item)}>{item['nickname']}</li>)}
                </ul>
            </div>
            <p className="toptip"> Top Tip: try not to let your ships HP hit zero, otherwise you'll die!</p>
        </div>
    )
        
}

export default Autocomplete