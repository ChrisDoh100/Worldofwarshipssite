import axios from 'axios'

const baseUrl = 'http://localhost:1836';


//handle user creation


export const createUser = async(newUser)=>{
    console.log("newUser2",newUser)
    try{
        const response2 = axios.get(`${baseUrl}/api/users`);
        console.log({response2})
        const response = await axios.post(`${baseUrl}/api/users/`,newUser)
        console.log("Wtf")
        console.log(response.data)
        return response.data
    }catch(error){
        console.log(error);
    }
}

export const UserLogin = async(newUser)=>{
    console.log("newUser1",newUser)
    const response = await axios.post(`${baseUrl}/api/login/`,newUser)
    console.log(response)
    return response.data
}