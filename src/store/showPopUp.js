import { createSlice } from "@reduxjs/toolkit";

const initialShowState = {
  isShowPopUp: false,
};

const showSlice = createSlice({
  name: "show",
  initialState: initialShowState,
  reducers: {
    showPopUp(state) {
      state.isShowPopUp = true;
    },
    notShowPopUp(state){
      state.isShowPopUp = false
    }
  },
});

export const showActions = showSlice.actions;
export default showSlice.reducer;
