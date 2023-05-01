import { createSlice } from "@reduxjs/toolkit"

const DisplayRegisterPageSlice = createSlice({
    name:'DisplayRegisterPage',
    initialState:{DisplayRegisterPage:true},
    reducers:{
        displayregisterfalsey: state=>{
            state.DisplayRegisterPage=false;
        },
        displayregistertruey :state =>{
            state.DisplayRegisterPage=true;
        }
    }
})

export const { displayregistertruey,displayregisterfalsey } = DisplayRegisterPageSlice.actions
export default DisplayRegisterPageSlice.reducer