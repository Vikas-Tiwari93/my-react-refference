import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  added: [],
  amount: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addprice: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    addcart: (state, action) => {
      state.added.push(action.payload);
    },
  },
});
export default cartSlice.reducer;
export const { addprice, addcart } = cartSlice.actions;
