import { createSlice } from "@reduxjs/toolkit"

const DisplayLoginSlice = createSlice({
    name: 'DisplayLogin',
    initialState:{displaylogin:true},
    reducers:{
        displayloginfalsey: state=>{
            state.displaylogin=false;
        },
        displaylogintruey :state =>{
            state.displaylogin=true;
        }
    }
})


export const { displayloginfalsey,displaylogintruey } = DisplayLoginSlice.actions
export default DisplayLoginSlice.reducer

