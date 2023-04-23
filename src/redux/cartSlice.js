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
    deleteAllPizzas(state) {
      state.splice(0, state.length);
    },
    increaseAmount(state, action) {
      const pizza = state.find(pizza => pizza.id === action.payload);
      pizza.amount += 1;
    },
    decreaseAmount(state, action) {
      const pizza = state.find(pizza => pizza.id === action.payload);
      pizza.amount -= 1;
    },
  },
});

export const {
  addPizza,
  deletePizza,
  increaseAmount,
  decreaseAmount,
  deleteAllPizzas,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
