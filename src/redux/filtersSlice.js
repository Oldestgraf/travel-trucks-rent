import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  equipment: [],
  type: [],
  location: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    toggleEquipment: (state, action) => {
      const index = state.equipment.indexOf(action.payload);
      if (index === -1) {
        state.equipment.push(action.payload);
      } else {
        state.equipment.splice(index, 1);
      }
    },
    toggleType: (state, action) => {
      const index = state.type.indexOf(action.payload);
      if (index === -1) {
        state.type.push(action.payload);
      } else {
        state.type.splice(index, 1);
      }
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setFilters, toggleEquipment, toggleType, setLocation } = filtersSlice.actions;

export default filtersSlice.reducer;
