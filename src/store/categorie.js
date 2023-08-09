import { createSlice } from "@reduxjs/toolkit";

const initialCategorieState = {
  categorie: "All",
};

const categorieSlice = createSlice({
  name: "categorie",
  initialState: initialCategorieState,
  reducers: {
    setCategorie(state, action) {
      state.categorie = action.payload;
    },
  },
});

export const categorieActions = categorieSlice.actions;
export default categorieSlice.reducer;
