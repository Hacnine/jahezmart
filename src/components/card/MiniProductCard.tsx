"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Box, Button, Fade, Modal } from "@mui/material";
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
import Link from "next/link";
import QuickView from "../common/ui/QuickView";
import Scrollbars from "react-custom-scrollbars-2";

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
    sentCartItem,
    deleteCartSingleProduct,
    sentWishListItem,
    wishListProducts,
    removeFromWishList,
  } = useCartContext();

  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [wishList, setWishList] = useState(false);
  const [cart, setCart] = useState(false);

  const [selected, setSelected] = useState<string>(colors[0]);
  const [open, setOpen] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [message, setMessage] = useState("Added to cart!");
  const [wishListMessage, setWishListMessage] = useState("Added to WishList!");

  const [favorite, setFavorite] = useState(false);
  const [index, setIndex] = useState(0);

  const firstColorKey = Object.keys(images)[index];
  const firstImagePath = (images as { [color: string]: string[] })[
    firstColorKey
  ]?.[0];

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    if (favorite) {
      removeFromWishList(setOpenWishList, setWishListMessage, id);
    } else {
      sentWishListItem(setOpenWishList, setWishListMessage, {
        id,
        name,
        firstImagePath,
        quantity,
        price,
        stock,
        selected,
      });
    }
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
      deleteCartSingleProduct(setOpen, setMessage, id);
    } else {
      sentCartItem(setOpen, setMessage, {
        id,
        name,
        firstImagePath,
        quantity,
        price,
        stock,
        selected,
      });
    }
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className=" mb-2 relative group  rounded-md overflow-hidden  start md:flex-row flex-col md:w-[276px] md:h-[95px] w-full">
      <div className="w-fit h-fit relative  group overflow-hidden">
        <div className="center    ">
          <img src={firstImagePath} alt="" className="md:w-[90%] p-3 w-[60%]" />
        </div>

        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-md transition-color duration-300 center gap-10 w-full z-50"
        >
          <div className="between  px-2 ">
            <TooltipWrapper open={open} setOpen={setOpen} message={message}>
              <IconButton
                onClick={handleCartClick}
                size="small"
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
      <button
        className="left-0 opacity-0   group-hover:opacity-100 absolute z-10 w-fit px-2 bottom-0 bg-orangeRed py-1 font-semibold text-white text-xs transition-color duration-300 rounded-md"
        onClick={() => setModalOpen(true)}
      >
        <Preview />
      </button>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="bg-white center md:p-10 p-4 rounded-tr-[33px] rounded-bl-[33px] rounded"
          style={{ width: "90%", height: "90%" }}
        >
          <Scrollbars style={{ width: "100%", height: "100%" }}>
            <QuickView id={id} modal={true} />
          </Scrollbars>
        </div>
      </Modal>

      <div className=" p-3 w-full cursor-pointer ">
        <Link href={`shop/${id}`}>
          <h3 className=" font-semibold uppercase leading-5 md:text-xs text-sm hover:text-chocolate">
            {name}
          </h3>

          <span className="font-extrabold text-xs text-red-600 leading-5">
            <span className=" font-extrabold"> ৳</span> {price}
          </span>

          <div className="start text-xs">
            <StarRating rating={rating} reviews={reviews} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MiniProductCard;