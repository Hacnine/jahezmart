"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import productsData from "../../public/products.json";
import cartReducer from "./cartReducer";
import {
  Product2 as Product,
  AddToCartProps,
  AddToWishListProps,
} from "../type/index";

interface initialStateType {
  filteredProducts: Product[];
  cartProducts: AddToCartProps[];
  wishListProducts: AddToWishListProps[];
}

const initialState: initialStateType = {
  filteredProducts: [],
  cartProducts: [],
  wishListProducts: [],
};

type CartContext = initialStateType & {
  addToCart: (cartProducts: AddToCartProps) => void;
  deleteCartSingleProduct: (id: string) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;

  addToWishList: (wishListProducts: AddToWishListProps) => void;
  removeFromWishList: (id: string) => void;

};

export const CartContext = createContext<CartContext | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  

  const addToCart = (props: AddToCartProps) => {
    {
      dispatch({ type: "ADD_TO_CART", payload: props });
    }
  };
  const deleteCartSingleProduct = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateCartItemQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const addToWishList = (whishListData: AddToWishListProps[]) => {
    {
      dispatch({ type: "ADD_TO_Wish_List", payload: whishListData });
    }
  };

  const removeFromWishList = (id: string) => {
    dispatch({ type: "REMOVE_FROM_Wish_List", payload: id });
  };


  return (
    <CartContext.Provider
      value={{
        ...state,
        cartProducts: state.cartProducts,
        addToCart,
        deleteCartSingleProduct,
        updateCartItemQuantity,
        addToWishList,
        removeFromWishList
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
