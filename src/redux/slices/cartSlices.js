import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
    reduceFromCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart.qty > 0) {
        itemInCart.qty--;
      }
      if (itemInCart.qty === 0) {
        const remove = state.data.filter(
          (item) => item.id !== action.payload.id
        );
        state.data = remove;
      }
    },
    removeFromCart: (state, action) => {
      if (state.data.find((item) => item.id === action.payload.id)) {
        const remove = state.data.filter(
          (item) => item.id !== action.payload.id
        );
        state.data = remove;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { reduceFromCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
