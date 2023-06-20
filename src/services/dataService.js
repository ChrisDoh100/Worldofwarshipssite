import axios from "axios";
import { async } from "regenerator-runtime";


const baseUrl = 'http://localhost:3001';


export const SaveUserData = async (datapoint)=>{
    console.log({datapoint});
    const response = await axios.post(`${baseUrl}/api/infos/`,{statistic:datapoint[0],value:datapoint[1]},{ headers: {"Authorization" : `Bearer ${localStorage.token}`} });
    console.log(response);
    return response.data;
}