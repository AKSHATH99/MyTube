import { configureStore } from "@reduxjs/toolkit";
import sidebarslice from "./sidebarslice";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer:{
        sidebar:sidebarslice,
        themeSlice:themeSlice,
    }
})

export default store;