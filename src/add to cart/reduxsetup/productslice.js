import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isloding: true,
  products: [],
};
export let productData = createAsyncThunk("productData", async () => {
  try {
    let producst = await fetch("http://localhost:3000/products");
    let json = await producst.json();
    console.log(json);
    return json;
  } catch (err) {
    console.log(err);
  }
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  //   reducers:{ will take actions directly}
  extraReducers: (builder) => {
    builder.addCase(productData.fulfilled, (state, action) => {
      productData.isloding = false;
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
