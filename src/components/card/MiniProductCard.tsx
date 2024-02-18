"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import {
  FavoriteBorder,
  HeartBroken,
  Preview,
  ShoppingCart,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRating from "../common/ui/StarRating";
import { BsCart, BsCartCheckFill, BsCartDash } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { useCartContext } from "@/context_reducer/cartContext";
import { ProductCardProps } from "@/type";
import TooltipWrapper from "../wrapper/TooltipWrapper";

const MiniProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  discount,
  images,
  colors,
  star,
  quantity,
  rating,
  reviews,
  stock,
}) => {
  const {
    addToCart,
    cartProducts,
    addToWishList,
    deleteCartSingleProduct,
    wishListProducts,
    removeFromWishList,
  } = useCartContext();

  const [wishList, setWishList] = useState(false);
  const [cart, setCart] = useState(false);

  const [selected, setSelected] = useState<string>(colors[0]);
  const [open, setOpen] = React.useState(false);
  const [openWishList, setOpenWishList] = React.useState(false);
  const [message, setMessage] = useState("Added to cart!");
  const [wishListMessage, setWishListMessage] = useState("Added to WishList!");

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleWishListTooltipClose = () => {
    setOpenWishList(false);
  };
  const [favorite, setFavorite] = useState(false);
  const [index, setIndex] = useState(0);

  const firstColorKey = Object.keys(images)[index];
  const firstImagePath = (images as { [color: string]: string[] })[
    firstColorKey
  ]?.[0];

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    if (favorite) {
      removeWishlistItem();
    } else {
      sentWishListItem();
    }
  };

  const sentCartItem = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
      setMessage("Added to Cart!")
    }, 1000);
    // const existingProduct = cartProducts.find((item) => item.id === id);

    // if (existingProduct) {
    //   setMessage("You have already added this product in your cart!");
    // } else {
    addToCart({ id, name, firstImagePath, quantity, price, stock, selected });
    // }
  };

  const removeCartItem = () => {
    setOpen(true);

    deleteCartSingleProduct(id);
    setMessage("Removed from Cart!");

    setTimeout(() => {
      setOpen(false);
      setMessage("Added to Cart!"); // Reset message after a certain period
    }, 1000);
  };

  const sentWishListItem = () => {
    setOpenWishList(true);
    addToWishList({
      id,
      name,
      firstImagePath,
      price,
      stock,
      quantity,
      selected,
    });

    setTimeout(() => {
      setOpenWishList(false);
      setWishListMessage("Product is added to Wishlist!"); // Reset message after a certain period
    }, 1000);
  };

  const removeWishlistItem = () => {
    setOpenWishList(true);
    removeFromWishList(id);
    setWishListMessage("Removed from your wishlist!");

    setTimeout(() => {
      setOpenWishList(false);
      setWishListMessage("Product is added to Wishlist!"); // Reset message after a certain period
    }, 1000);
  };
  useEffect(() => {
    const existingProduct = wishListProducts.find((item) => item.id === id);
    if (existingProduct) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [wishListProducts, id]);

  const handleCartClick = () => {
    setCart(!cart);

    if (cart) {
      removeCartItem();
    } else {
      sentCartItem();
    }
  };
  // rounded-tr-3xl rounded-bl-3xl
  return (
    <div className=" mb-2 relative group shadow-md shadow-slate-400 rounded-md overflow-hidden rounded-tr-3xl rounded-bl-3xl center md:flex-row flex-col md:w-[276px] md:h-[95px] w-full">
      <div className="w-fit h-fit relative  group overflow-hidden">
        <div className="center    ">
          <img src={firstImagePath} alt="" className="md:w-[90%] p-3 w-[60%]" />
        </div>

        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-md transition-color duration-300 rounded-tr-3xl rounded-bl-3xl"
        >
          <div className="between px-2 mt-4">
            <TooltipWrapper open={open} setOpen={setOpen} message={message}>
              <IconButton
                onClick={handleCartClick}
                sx={{
                  bgcolor: "white",
                  "&:hover": {
                    bgcolor: "lightgray",
                  },
                }}
              >
                {cart ? (
                  <BsCartCheckFill className="text-red-600 text-base" />
                ) : (
                  <BsCart className="text-red-600 text-base" />
                )}
              </IconButton>
            </TooltipWrapper>

            <TooltipWrapper
              open={openWishList}
              setOpen={setOpenWishList}
              message={wishListMessage}
            >
              <IconButton
                onClick={handleFavoriteClick}
                sx={{
                  bgcolor: "white",
                  "&:hover": {
                    bgcolor: "lightgray",
                  },
                }}
              >
                {favorite ? (
                  <FavoriteIcon className="text-red-600 text-base" />
                ) : (
                  <FavoriteBorder className="text-red-600 text-base" />
                )}
              </IconButton>
            </TooltipWrapper>
          </div>
        </div>
      </div>
      <button className="left-0 opacity-0   group-hover:opacity-100 absolute z-10 w-fit px-2 bottom-0 bg-orangeRed py-1 font-semibold text-white text-xs transition-color duration-300 rounded-bl-3xl rounded-tr-3xl">
        <Preview />
      </button>

      <div className=" p-3 w-full ">
        <h3 className=" font-semibold uppercase leading-5 md:text-xs text-sm hover:text-chocolate">
          {name}
        </h3>

        <span className="font-extrabold text-xs text-red-600 leading-5">
          <span className=" font-extrabold"> ৳</span> {price}
        </span>

        <div className="start text-xs">
          <StarRating rating={rating} reviews={reviews} />
        </div>
        {/* <button className="absolute bottom-0 bg-chocolate hover:bg-chocolate/90 w-full py-2 text-white font-semibold rounded-tr-3xl rounded-bl-3xl">
        <ShoppingCart /> ADD TO CART
      </button> */}
      </div>
    </div>
  );
};

export default MiniProductCard;
