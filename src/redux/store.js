import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./campersSlice";
import filtersReducer from "./filtersSlice";
import favoritesReducer from "./favoritesSlice";
 
export const store = configureStore({
    reducer: {
        campers: camperReducer,
        filters: filtersReducer,
        favorites: favoritesReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem("favorites", JSON.stringify(store.getState().favorites));
})