import { createSlice } from "@reduxjs/toolkit";

const userId = localStorage.getItem("user-id")
  ? JSON.parse(localStorage.getItem("user-id"))
  : "";
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";
const fullName = localStorage.getItem("full-name")
  ? JSON.parse(localStorage.getItem("full-name"))
  : "";
const expire = localStorage.getItem("expire")
  ? JSON.parse(localStorage.getItem("expire"))
  : "";

const currentUserState = {
  userId,
  token,
  fullName,
  expire,
};

const logSlice = createSlice({
  name: "log",
  initialState: currentUserState,
  reducers: {
    logIn(state, action) {
      state.userId = action.payload.userId;
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
      state.expire = action.payload.expire;
      localStorage.setItem("token", JSON.stringify(state.token));
      localStorage.setItem("user-id", JSON.stringify(state.userId));
      localStorage.setItem("full-name", JSON.stringify(state.fullName));
      localStorage.setItem("expire", JSON.stringify(state.expire));
    },
    logOut(state) {
      state.userId = "";
      state.token = "";
      state.fullName = "";
      state.expire = "";

      localStorage.removeItem("user-id");
      localStorage.removeItem("token");
      localStorage.removeItem("full-name");
      localStorage.removeItem("expire");
    },
  },
});

export const logActions = logSlice.actions;
export default logSlice.reducer;
