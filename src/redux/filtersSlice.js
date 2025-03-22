import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: "",
    type: "",
    features: [],
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetFilters: () => initialState,
    },
});

export const { changeFilter, resetFilters } = filtersSlice.actions;
export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;