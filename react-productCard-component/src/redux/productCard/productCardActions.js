import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await axios.get("http://localhost:3004/product");
    return response.data;
  }
);
