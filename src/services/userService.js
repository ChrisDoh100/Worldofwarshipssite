import axios from 'axios'

const baseUrl = 'http://localhost:3001';


//handle user creation


const createUser = async(newUser)=>{
    console.log("newUser",newUser)
    const response = await axios.post(`${baseUrl}/api/users`,newUser)
    return response.data
}

//handle login
export default  createUser 