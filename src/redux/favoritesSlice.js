import { createSlice } from '@reduxjs/toolkit';

const FAVORITES_KEY = 'favorites';

const loadFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load favorites from localStorage:', error);
    return [];
  }
};

const saveToLocalStorage = (favorites) => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Failed to save favorites to localStorage:', error);
  }
};

const initialState = loadFromLocalStorage();

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.indexOf(id);
      if (index !== -1) {
        state.splice(index, 1); 
      } else {
        state.push(id);
      }
      saveToLocalStorage(state);
    },
    setFavorites: (_, action) => {
      const newState = action.payload;
      saveToLocalStorage(newState);
      return newState;
    },
  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites;
export default favoritesSlice.reducer;