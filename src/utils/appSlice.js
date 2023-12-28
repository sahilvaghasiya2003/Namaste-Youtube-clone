import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,

    },
    reducers:{
        toogleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        CloseMenu:(state)=>{
            state.isMenuOpen = false;
        }
    }
})

export const {toogleMenu,CloseMenu} = appSlice.actions;
export default appSlice.reducer;