import { createSlice } from "@reduxjs/toolkit";

const initialLogState = {
  isLogged: false,
};

const logSlice = createSlice({
  name: "log",
  initialState: initialLogState,
  reducers: {
    logIn(state) {
      state.isLogged = true;
    },
    logOut(state) {
      state.isLogged = false;
    },
  },
});

export const logActions = logSlice.actions;
export default logSlice.reducer;
