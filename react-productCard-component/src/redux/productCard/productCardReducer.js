import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./productCardActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        if (action.error.message === "Network Error") {
          state.error =
            "Unable to connect to the server. Please check your internet connection.";
        } else {
          state.error =
            "An error occurred while fetching data. Please try again later.";
        }
      });
  },
});

export default productSlice.reducer;
