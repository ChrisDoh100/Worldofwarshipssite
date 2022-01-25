import react, { useState } from "react"
import axios from "axios"
import './custom.css'
import './playerlookup.css'
import { useNavigate }from "react-router-dom";

const Playerlookup = ()=>{
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
            console.log("fuck off")
        }else{
            setSuggestions(account_id.slice(0,5))
        }
    }
    return(
        <div className="background" type ='text/css'>
            <div className="blur" type='text/css'>
                <div className="header" type='text/css'>
                    <form className="form" autoComplete="off" onChange={handleEvent}>
                        <h1 className="title">World of </h1>
                        <h1 className="title">Warships</h1>
                        <h1 className="title">Stats</h1>
                        <div>
                        <input className = "name" type="text" name="name" id='input' placeholder="Player Id..."/>
                        {suggestions && suggestions.map((suggestion,i)=>
                        <div key={i} className="suggestion justify-content-md-center" onClick={(e)=>handleSubmit(suggestion)}>
                            {suggestion['nickname']}
                        </div>
                        )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Playerlookup
