//handles all api calls fairlybasic stuff.
import axios from "axios";

const playerhurl = `https://api.worldofwarships.eu/wows/account/info/?application_id=${process.env.API}&account_id`;

//const searchurl = `https://api.worldofwarships.eu/wows/account/list/?application_id=${process.env.API}&search`;

export const getPlayerNames=async (query)=>{
    console.log(query)
    try{
        const searchurl = `https://api.worldofwarships.eu/wows/account/list/?application_id=${process.env.API}&search`;
        const accounts = await axios.get(searchurl+"="+`${query}`)
        console.log(accounts)
        return accounts
    }catch(error){
        console.log("Error");
        return [];
    }
}

export const getPlayerData=async (username)=>{
    try{
        const playerdata =await axios.get(playerhurl+"="+`${username}`)
        return playerdata
    }catch(error){
        console.log("Error");
        return [];
    }
}

