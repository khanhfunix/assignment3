import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./showPopUp";
import categorieReducer from "./categorie";
import registerCheckReducer from "./registerCheck";

const store = configureStore({
  reducer: {
    show: showReducer,
    categorie: categorieReducer,
    registerCheck: registerCheckReducer,
  },
});

export default store;
