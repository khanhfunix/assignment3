import { createSlice } from "@reduxjs/toolkit";
const cartItem = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const totalPrice = localStorage.getItem("totalPrice")
  ? JSON.parse(localStorage.getItem("totalPrice"))
  : 0;

const initialCartState = {
  cartItem,
  totalPrice,
};

const saveStorage = (state) => {
  localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
  localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartItem.find(
        (item) => item.productId === newItem.id
      );
      state.totalQuantity++;
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice = existingItem.totalPrice + newItem.totalPrice;
      } else {
        state.cartItem.push({
          productId: newItem.id,
          image: newItem.image,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
          name: newItem.title,
          count: newItem.count,
        });
      }

      state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
      saveStorage(state);
    },
    removeCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartItem.find(
        (item) => item.productId === newItem.id
      );
      state.totalQuantity--;
      if (existingItem) {
        existingItem.quantity < newItem.quantity
          ? (existingItem.quantity = 0)
          : (existingItem.quantity = existingItem.quantity - newItem.quantity);
        existingItem.totalPrice < newItem.totalPrice
          ? (existingItem.totalPrice = 0)
          : (existingItem.totalPrice =
              existingItem.totalPrice + newItem.totalPrice);
      } else {
        state.cartItem.push({
          productId: newItem.id,
          image: newItem.image,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
          name: newItem.title,
          count: newItem.count,
        });
      }
      let tempoTotal = newItem.price * newItem.quantity;

      state.totalPrice < tempoTotal
        ? (state.totalPrice = 0)
        : (state.totalPrice = state.totalPrice - tempoTotal);

      saveStorage(state);
    },
    deleteCartItem(state, action) {
      const itemId = action.payload;
      const idRemove = state.cartItem.findIndex((e) => e.productId === itemId);

      const totalCartPrice =
        state.cartItem[idRemove].price * state.cartItem[idRemove].quantity;
      state.totalPrice = state.totalPrice - totalCartPrice;
      state.cartItem.splice(idRemove, 1);
      saveStorage(state);
    },
    deleteCart(state) {
      state.cartItem = [];
      state.totalPrice = 0;
      saveStorage(state);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
