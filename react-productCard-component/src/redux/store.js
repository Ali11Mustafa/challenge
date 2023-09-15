import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productCard/productCardReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
