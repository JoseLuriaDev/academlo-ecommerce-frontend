import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: () => {},
  },
});

export default cartSlice.reducer;
