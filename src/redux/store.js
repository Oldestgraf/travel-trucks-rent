import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./campersSlice";
import filtersReducer from "./filtersSlice";
import favorites from "./favoritesSlice";
 
export const store = configureStore({
    reducer: {
        campers: camperReducer,
        filters: filtersReducer,
        favorites: favorites,
    },
});

store.subscribe(() => {
    localStorage.setItem("favorites", JSON.stringify(store.getState().favorites));
})