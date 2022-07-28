import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// La configuracion de redux (Usaremos redux toolkit)

const reducer = combineReducers({
  cart: cartSlice,
});

export const store = configureStore({ reducer });
