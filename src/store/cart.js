import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItem: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(action, state) {
      const { payload } = action;
      const item = state.cartItem.find((product) => product.id === payload.id);
      if (item) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
          totalPrice: state.totalPrice + payload.price,
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        totalPrice: state.totalPrice + payload.price,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
