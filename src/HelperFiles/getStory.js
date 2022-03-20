import axios from "axios"

//Basic call functionality to the postgres server running locally.
const baseurl = `http://localhost:3001/`
export async function getStory(){

    const stories = await axios.get(baseurl)
                                .then(res=>res.data[0])
                                .catch(err=>console.log(err)) 
    console.log({stories})
    return stories
}