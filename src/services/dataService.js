import axios from "axios";
import { async } from "regenerator-runtime";


const baseUrl = 'http://localhost:3001';


export const SaveUserData = async (datapoint)=>{
    console.log({datapoint});
    const response = await axios.post(`${baseUrl}/api/infos/`,{statistic:datapoint[0],value:datapoint[1]},{ headers: {"Authorization" : `Bearer ${localStorage.token}`} });
    console.log(response);
    return response.data;
}

export const GetUserData = async(data)=>{
    console.log({data});
    const response = await axios.get(`${baseUrl}/api/infos/`,{username:data[0],value:data[1]},{ headers: {"Authorization" : `Bearer ${localStorage.token}`}});
    console.log(response);
    return response.data;
}