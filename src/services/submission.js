//handles all api calls fairlybasic stuff.
import axios from "axios";

const playerhurl = `https://api.worldofwarships.eu/wows/account/info/?application_id=${process.env.API}&account_id`;

const searchurl = `https://api.worldofwarships.eu/wows/account/list/?application_id=${process.env.API}&search`;

export const getPlayerNames=async (query)=>{
   const accounts = await axios.get(searchurl+"="+`${query}`)
   return accounts
}

export const getPlayerData=async (username)=>{
    const playerdata =await axios.get(playerhurl+"="+`${username}`)
    return playerdata
}

