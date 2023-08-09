import { createSlice } from "@reduxjs/toolkit";

const initialRegisterCheckState = {
  isNameEmpty: false,
  isEmailEmpty: false,
  isPhoneEmpty: false,
  isPasswordLengthEnough: false,
  isEmailUsed: false,
};

const registerCheckSlice = createSlice({
  name: "registerCheck",
  initialState: initialRegisterCheckState,
  reducers: {
    nameIsEmpty(state) {
      state.isNameEmpty = true;
    },
    nameIsNotEmpty(state) {
      state.isNameEmpty = false;
    },
    emailIsEmpty(state) {
      state.isEmailEmpty = true;
    },
    emailIsNotEmpty(state) {
      state.isEmailEmpty = false;
    },
    phoneIsEmpty(state) {
      state.isPhoneEmpty = true;
    },
    phoneIsNotEmpty(state) {
      state.isPhoneEmpty = false;
    },
    passwordVerifed(state) {
      state.isPasswordLengthEnough = false;
    },
    passwordNotVerified(state) {
      state.isPasswordLengthEnough = true;
    },
    emailUsed(state) {
      state.isEmailUsed = true;
    },
    emailNotUsed(state) {
      state.isEmailUsed = false;
    },
  },
});

export const registerCheckActions = registerCheckSlice.actions;

export default registerCheckSlice.reducer;
