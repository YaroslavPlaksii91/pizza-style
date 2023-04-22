import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addPizza(state, action) {
      state.push(action.payload);
    },
    deletePizza(state, action) {
      const index = state.findIndex(pizza => pizza.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addPizza, deletePizza } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
