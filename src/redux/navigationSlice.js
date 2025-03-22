import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: "navigation",
    initialState: { activePage: "/" },
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload
        }
    }
})