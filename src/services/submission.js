import axios from "axios";

const playerhurl = `https://api.worldofwarships.eu/wows/account/info/?application_id=8f8a6cff45216e56c20a911b91be9186&account_id`;

const searchurl = `https://api.worldofwarships.eu/wows/account/list/?application_id=8f8a6cff45216e56c20a911b91be9186&search`;

export const getPlayerNames=(query)=>{
   const accounts = axios.get(searchurl+"="+`${query}`)
   return accounts
}

export const getPlayerData=(username)=>{
    const playerdata =axios.get(playerhurl+"="+`${username}`)
    return playerdata
}

