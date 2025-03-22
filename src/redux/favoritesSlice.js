import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites") || []);

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const camperId = action.payload;
            if (state.includes(camperId)) {
                return state.filter((id) => id !== camperId);
            } else {
                return [...state, camperId];
            }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites;

export default favoritesSlice.reducer;