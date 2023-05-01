import { createSlice } from "@reduxjs/toolkit";



const DisplayUsername = createSlice({
    name:'DisplayUsername',
    initialState:{name:""},
    reducers:{
        updateUsername(state,action){
            state.name = action.payload;
        },
        loggingout:state=>{
            state.name =""
        }
    }
})

export const {updateUsername,loggingout} = DisplayUsername.actions
export default DisplayUsername.reducer