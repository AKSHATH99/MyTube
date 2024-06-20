import { createSlice } from "@reduxjs/toolkit";

const sidebarslice=createSlice({
    name :"sidebar",
    initialState:{
        sidebar:true,
    },
    reducers:{
        hideSidebar:(state)=>{
            state.sidebar=!state.sidebar;
        },
        closeMenu:(state)=>{
            state.sidebar=false;
        }
    }
})

export const {hideSidebar, closeMenu}=sidebarslice.actions;
export  default sidebarslice.reducer;