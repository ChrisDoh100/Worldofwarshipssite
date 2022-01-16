import react, { useState } from "react"
import axios from "axios"
import Header from './components/header'
import './playerlookup.css'

const Playerlookup = ()=>{
    const [data,setData]=useState(null)

    const handleSubmit=async(event)=>{
        event.preventDefault()
        const account_id = await axios.get(`https://api.worldofwarships.eu/wows/account/list/?application_id=8f8a6cff45216e56c20a911b91be9186&search=${event.target.name.value}`)
                                        .then(res=>res.data.data[0].account_id)
                                        .catch(err=>console.error(err))

        console.log(account_id)
        if(account_id){
            const data =await axios.get(`https://api.worldofwarships.eu/wows/account/info/?application_id=8f8a6cff45216e56c20a911b91be9186&account_id=${account_id}`)
                        .then(res=>setData(res.data.data[account_id].statistics.pvp))
                        .catch(err=>console.error(err))
        }
    }
    return(
        <div className="header" type='text/css'>
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">World of </h1>
                <h1 className="title">Warships</h1>
                <h1 className="title">Stats</h1>
                <input className = "name" type="text" name="name" placeholder="Player Id..."/>
            </form>
        </div>
    )
}

export default Playerlookup
