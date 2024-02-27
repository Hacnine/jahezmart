"use client";
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
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
  wishListProducts: AddToCartProps[];
}

const initialState: initialStateType = {
  filteredProducts: [],
  cartProducts: [],
  wishListProducts: [],
};

type CartContext = initialStateType & {
  addToCart: (cartProducts: AddToCartProps) => void;
  deleteCartSingleProduct: (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    id: string
  ) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;

  addToWishList: (wishListProducts: AddToCartProps) => void;

  sentCartItem: (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    singleProduct: AddToCartProps
  ) => void;
  sentWishListItem: (
    setOpenWishList: React.Dispatch<React.SetStateAction<boolean>>,
    setWishListMessage: React.Dispatch<React.SetStateAction<string>>,
    singleCartProduct: AddToCartProps
  ) => void;
  removeFromWishList: (
    setOpenWishList: React.Dispatch<React.SetStateAction<boolean>>,
    setWishListMessage: React.Dispatch<React.SetStateAction<string>>,
    id: string
  ) => void;
};

export const CartContext = createContext<CartContext | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);


  const addToCart = (props: AddToCartProps) => {
    {
      dispatch({ type: "ADD_TO_CART", payload: props });
    }
  };
  const deleteCartSingleProduct = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    id: string
  ) => {
    setOpen(true);

    const existingProduct = state.cartProducts.find(
      (item: AddToCartProps) => item.id === id
    );

    if (existingProduct) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
      setMessage("Removed From Cart!");

      setTimeout(() => {
        setOpen(false);
        setMessage("Added to Cart!"); // Reset message after a certain period
      }, 1000);
    } else {
      // dispatch({ type: "ADD_TO_CART", payload: props });
    }
  };

  const updateCartItemQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const addToWishList = (whishListData: AddToCartProps) => {
    {
      dispatch({ type: "ADD_TO_Wish_List", payload: whishListData });
    }
  };

  const sentCartItem = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    singleProduct: AddToCartProps
  ) => {
    // console.log(singleProduct);
    const { id } = singleProduct;
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 1000);
    const existingProduct = state.cartProducts.find(
      (item: AddToCartProps) => item.id === id
    );

    if (existingProduct) {
      setMessage("The Product Exist In Your Cart!");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: singleProduct });
    }
  };

  const sentWishListItem = (
    setOpenWishList: React.Dispatch<React.SetStateAction<boolean>>,
    setWishListMessage: React.Dispatch<React.SetStateAction<string>>,
    whishListData: AddToCartProps
  ) => {
    setOpenWishList(true);
    const { id } = whishListData;
    const existingProduct = state.wishListProducts.find(
      (item: AddToCartProps) => item.id === id
    );

    if (existingProduct) {
      setWishListMessage("The Product Exist In Your Wishlist");
    } else {
      dispatch({ type: "ADD_TO_Wish_List", payload: whishListData });
      setTimeout(() => {
        setOpenWishList(false);
        setWishListMessage("Added To Wishlist!"); // Reset message after a certain period
      }, 3000);
    }
  };

  const removeFromWishList = (
    setOpenWishList: React.Dispatch<React.SetStateAction<boolean>>,
    setWishListMessage: React.Dispatch<React.SetStateAction<string>>,
    id: string
  ) => {
    setOpenWishList(true);
    dispatch({ type: "REMOVE_FROM_Wish_List", payload: id });

    setWishListMessage("Removed from your wishlist!");

    setTimeout(() => {
      setOpenWishList(false);
      setWishListMessage("Product is added to Wishlist!"); // Reset message after a certain period
    }, 3000);
  };




  return (
    <CartContext.Provider
      value={{
        ...state,
        cartProducts: state.cartProducts,
        sentCartItem,
        addToCart,
        deleteCartSingleProduct,
        updateCartItemQuantity,
        sentWishListItem,
        addToWishList,
        removeFromWishList,

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
