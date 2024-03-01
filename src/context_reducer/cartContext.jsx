"use client"

import React, {
  createContext,
  useReducer,
  useContext,
} from "react";
import cartReducer from "./cartReducer";


const initialState = {
  filteredProducts: [],
  cartProducts: [],
  wishListProducts: [],
};


export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (props) => {
    dispatch({ type: "ADD_TO_CART", payload: props });
  };
  const deleteCartSingleProduct = (
    setOpen,
    setMessage,
    id
  ) => {
    setOpen(true);

    const existingProduct = state.cartProducts.find(
      (item) => item.id === id
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

  const updateCartItemQuantity = (id, quantity) => {
  
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const addToWishList = (whishListData) => {
  
    dispatch({ type: "ADD_TO_Wish_List", payload: whishListData });
  };

  const sentCartItem = (
    setOpen,
    setMessage,
    singleProduct
  ) => {
    const { id } = singleProduct;
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 1000);
    const existingProduct = state.cartProducts.find(
      (item) => item.id === id
    );

    if (existingProduct) {
      setMessage("The Product Exist In Your Cart!");
    } else {
    
      dispatch({ type: "ADD_TO_CART", payload: singleProduct });
    }
  };

  const sentWishListItem = (
    setOpenWishList,
    setWishListMessage,
    whishListData
  ) => {
    setOpenWishList(true);
    const { id } = whishListData;
    const existingProduct = state.wishListProducts.find(
      (item) => item.id === id
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
    setOpenWishList,
    setWishListMessage,
    id
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
        wishListProducts: state.wishListProducts,
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
