import axios from "axios"


const baseurl = `http://localhost:3001/`
export async function getStory(){

    const stories = await axios.get(baseurl)
                                .then(res=>res.data[0].stories)
                                .catch(err=>console.log(err)) 

    return stories
}