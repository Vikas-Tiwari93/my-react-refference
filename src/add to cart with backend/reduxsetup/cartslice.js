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
    return jsondata;
  } catch (err) {
    console.log(err);
  }
});

// for test

export let cartlistget2 = createAsyncThunk("cartlistupdate2", async () => {
  try {
    let postdata = await fetch("http://localhost:3000/cart");
    let jsondata = await postdata.json();
    console.log(jsondata);
    return jsondata;
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
    reduceprice: (state, action) => {
      state.amount = state.amount - action.payload;
    },
    // addcart: (state, action) => {
    //   state.added.push(action.payload);
    // },
    // removecart: (state, action) => {
    //   state.added = state.added.filter((elm) => {
    //     if (action.payload.id !== elm.id) {
    //       return elm;
    //     }
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(cartlistget.fulfilled, (state, action) => {
      state.added = [...action.payload];
      state.amount = 0;
      for (let i = 0; i < state.added.length; i++) {
        state.amount += state.added[i].price;
      }
    });
    builder.addCase(cartlistget2.fulfilled, (state, action) => {
      state.added = [...action.payload];
      state.amount = 0;
      for (let i = 0; i < state.added.length; i++) {
        state.amount += state.added[i].price;
      }
    });
  },
});
export default cartSlice.reducer;
export const { addprice, addcart, removecart, reduceprice } = cartSlice.actions;
