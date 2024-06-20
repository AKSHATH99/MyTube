import { createSlice } from "@reduxjs/toolkit";

const themeSlice= createSlice({
    name:"themeSlice",
    initialState:{
        isdark:false,
    },
    reducers:{
        changeTheme:(state)=>{
            state.isdark=!state.isdark;
        }
    }
})
export const {changeTheme}=themeSlice.actions;
export default themeSlice.reducer;
