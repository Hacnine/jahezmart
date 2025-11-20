"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  wishListProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartProducts = state.cartProducts.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.cartProducts = state.cartProducts.map((p) =>
        p.id === id ? { ...p, quantity } : p
      );
    },
    addToWishlist: (state, action) => {
      state.wishListProducts.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      state.wishListProducts = state.wishListProducts.filter((p) => p.id !== id);
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  addToWishlist,
  removeFromWishlist,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
