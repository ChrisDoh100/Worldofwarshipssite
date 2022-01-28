import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './autocomplete.css'




const Autocomplete=()=>{

    let history = useNavigate();
    const [suggestions,setSuggestions]=useState([])




    const handleSubmit=async(username)=>{
        let data =await axios.get(`https://api.worldofwarships.eu/wows/account/info/?application_id=8f8a6cff45216e56c20a911b91be9186&account_id=${username['account_id']}`)
                        .then(res=>res.data.data[username['account_id']].statistics)
                        .catch(err=>console.error(err))
        let name = String(username['nickname']);
        console.log(name)
        history(`/data/${name}`,{state:{data}})
    }
    const handleEvent=async(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        let usernames=[]
        let account_id = await axios.get(`https://api.worldofwarships.eu/wows/account/list/?application_id=8f8a6cff45216e56c20a911b91be9186&search=${event.target.value}`)
                                        .then(res=>res.data.data)
                                        .catch(err=>console.error(err))

        if(typeof account_id==="undefined"){
            setTimeout(()=>{
                setSuggestions([])
            },100)
        }else{
            setSuggestions(account_id.slice(0,5))
        }
    }
    return(
        <>
            <h1 className="title">World of Warships Stats</h1>
            <div className="autocomplete">
                <input type='text/css' placeholder="Username...." onChange={(event)=>handleEvent(event)} ></input>
                <ul>
                    {suggestions && suggestions.map((item,i)=><li key={i} onClick={()=>handleSubmit(item)}>{item['nickname']}</li>)}
                </ul>
            </div>
        </>
    )
        
}

export default Autocomplete