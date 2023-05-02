import { createSlice } from "@reduxjs/toolkit"


const LoggedInSlice = createSlice({
    name:'LoggedIn',
    initialState:{loggedIn:false},
    reducers:{
        displayloggedinfalsey: state=>{
            state.loggedIn=false;
        },
        displayloggedintruey :state =>{
            state.loggedIn=true;
        }
    }
})


export const { displayloggedinfalsey,displayloggedintruey } = LoggedInSlice.actions
export default LoggedInSlice.reducer