import react, { useState } from "react"
import axios from "axios"
import Header from './components/header'
import './playerlookup.css'
import { useNavigate }from "react-router-dom";

const Playerlookup = ()=>{
    let history = useNavigate();
    let data = {};

    const handleSubmit=async(event)=>{
        event.preventDefault()
        console.log(event.target.value)
        let account_id = await axios.get(`https://api.worldofwarships.eu/wows/account/list/?application_id=8f8a6cff45216e56c20a911b91be9186&search=${event.target.value}`)
                                        .then(res=>res.data.data)
                                        .catch(err=>console.error(err))

        console.log(account_id)
        /*if(account_id){
            data =await axios.get(`https://api.worldofwarships.eu/wows/account/info/?application_id=8f8a6cff45216e56c20a911b91be9186&account_id=${account_id}`)
                        .then(res=>res.data.data[account_id])
                        .catch(err=>console.error(err))
        }
        history(`/data/${event.target.name.value}`,{state:{data}})*/
    }
    return(
        <div className="header" type='text/css'>
            <form className="form" onChange={handleSubmit}>
                <h1 className="title">World of </h1>
                <h1 className="title">Warships</h1>
                <h1 className="title">Stats</h1>
                <input className = "name" type="text" name="name" placeholder="Player Id..."/>
            </form>
        </div>
    )
}

export default Playerlookup
