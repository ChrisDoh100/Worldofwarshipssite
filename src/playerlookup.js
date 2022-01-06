import react, { useState } from "react"
import axios from "axios"
import './playerlookup.css'

const Playerlookup = ()=>{
    const [data,setData]=useState([])

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
            <h1>TDC World of Warships Stats</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <button type="submit">Submit!</button>
            </form>
            <div className="data">
                {Object.keys(data).map(dat=><li>{dat}</li>)}
            </div>
        </div>
    )
}

export default Playerlookup
