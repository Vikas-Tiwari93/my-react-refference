import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  added: [],
  amount: 0,
};

export let cartlistget = createAsyncThunk("cartlistupdate", async () => {
  try {
    let postdata = await fetch("http://localhost:3000/cart");
    let jsondata = await postdata.json();
    console.log(jsondata);
  } catch (err) {
    console.log(err);
  }
});

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
    removecart: (state, action) => {
      state.added = state.added.filter((elm) => {
        if (action.payload.id !== elm.id) {
          return elm;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cartlistget.fulfilled, (state, action) => {
      state.added = action.payload;
    });
  },
});
export default cartSlice.reducer;
export const { addprice, addcart, removecart } = cartSlice.actions;
