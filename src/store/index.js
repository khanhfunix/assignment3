import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./showPopUp";
import categorieReducer from "./categorie";
import logReducer from "./userlog";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    show: showReducer,
    categorie: categorieReducer,
    log: logReducer,
    cart: cartReducer,
  },
});

export default store;
