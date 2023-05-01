import { createSlice } from "@reduxjs/toolkit"


const LoggedInSlice = createSlice({
    name:'LoggedIn',
    initialState:{loggedIn:false},
    reducers:{
        displayloggedinfalsey: state=>{
            state.Displayloggedin=false;
        },
        displayloggedintruey :state =>{
            state.Displayloggedin=true;
        }
    }
})


export const { displayloggedinfalsey,displayloggedintruey } = LoggedInSlice.actions
export default LoggedInSlice.reducer