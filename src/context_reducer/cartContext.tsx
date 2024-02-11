"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import productsData from "../../public/products.json";
import cartReducer from "./cartReducer";
import { Product2 as Product } from "../type/index";
import Home from "../app/home/page";

interface initialStateType {
  filteredProducts: Product[];
  cartProducts: Product[];
}

const initialState: initialStateType = {
  filteredProducts: [],
  cartProducts: [],
};

type CartContext = initialStateType & {
  addToCart: (cartProducts: Product[]) => void;
};

export const CartContext = createContext<CartContext | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (cartItem: Product[]) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        cartProducts: state.cartProducts,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a ThemeProvider");
  }
  return context;
};

export default CartContextProvider;
