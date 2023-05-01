import axios from 'axios'

const baseUrl = 'http://localhost:3001';


//handle user creation


export const createUser = async(newUser)=>{
    console.log("newUser2",newUser)
    const response = await axios.post(`${baseUrl}/api/users/`,newUser)
    return response.data
}

export const UserLogin = async(newUser)=>{
    console.log("newUser1",newUser)
    const response = await axios.post(`${baseUrl}/api/login/`,newUser)
    console.log(response)
    return response.data
}