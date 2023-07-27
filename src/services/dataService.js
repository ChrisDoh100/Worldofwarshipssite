import axios from "axios";


const baseUrl = 'http://localhost:3001';


export const SaveUserData = async (datapoint)=>{
    console.log({datapoint});
    const response = await axios.post(`${baseUrl}/api/infos/`,{statistic:datapoint[0],value:datapoint[1]},{ headers: {"Authorization" : `Bearer ${localStorage.token}`} });
    console.log(response);
    return response.data;
}

export const GetUserData = async(data)=>{
    console.log({data});
    const response = await axios.post(`${baseUrl}/api/infos/userdata`,{user:data.Currentuser,value:data.stat},{ headers: {"Authorization" : `Bearer ${localStorage.token}`}});
    console.log({response});
    return response.data;
}