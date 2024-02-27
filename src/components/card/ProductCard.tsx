import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Button, ClickAwayListener, Modal, Tooltip, Zoom } from "@mui/material";
import { FavoriteBorder, HeartBroken, ShoppingCart } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRating from "../common/ui/StarRating";
import ColorButton from "../buttons/ColorButton";
import { useCartContext } from "@/context_reducer/cartContext";
import { CgShoppingCart } from "react-icons/cg";

import { ProductCardProps } from "@/type";
import TooltipWrapper from "../wrapper/TooltipWrapper";
import Scrollbars from "react-custom-scrollbars-2";
import QuickView from "../common/ui/QuickView";
const ProductCard: React.FC<ProductCardProps> = ({
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
    sentWishListItem,
    wishListProducts,
    removeFromWishList,
  } = useCartContext();

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<string>(colors[0]);
  const [open, setOpen] = React.useState(false);
  const [openWishList, setOpenWishList] = React.useState(false);
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

  // const handleTooltipClose = () => {
  //   setOpen(false);
  // };

  // const handleWishListTooltipClose = () => {
  //   setOpenWishList(false);
  // };

  // const sentCartItem = () => {
  //   setOpen(true);

  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 1000);
  //   const existingProduct = cartProducts.find((item) => item.id === id);
  //   const items = { id, name, firstImagePath, quantity, price, stock, selected }
  //   if (existingProduct) {
  //     setMessage("You have already added this product in your cart!");
  //   } else {
  //     addToCart(items);
  //   }

  // };

  // const sentWishListItem = () => {
  //   setOpenWishList(true);
  //   addToWishList({
  //     id,
  //     name,
  //     firstImagePath,
  //     price,
  //     stock,
  //     quantity,
  //     selected,
  //   });

  //   setTimeout(() => {
  //     setOpenWishList(false);
  //     setWishListMessage("Product is added to Wishlist!"); // Reset message after a certain period
  //   }, 3000);
  // };

  // const removeWishlistItem = () => {
  //   setOpenWishList(true);
  //   removeFromWishList(id);
  //   setWishListMessage("Removed from your wishlist!");

  //   setTimeout(() => {
  //     setOpenWishList(false);
  //     setWishListMessage("Product is added to Wishlist!"); // Reset message after a certain period
  //   }, 3000);
  // };
  useEffect(() => {
    const existingProduct = wishListProducts.find((item) => item.id === id);
    if (existingProduct) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [wishListProducts, id]);

  return (
    <div className=" hover:cursor-pointer relative group shadow-md shadow-slate-300 w-full rounded-md overflow-hidden rounded-tr-3xl rounded-bl-3xl">
      <div className="w-full  h-fit relative  group ">
        <div className="">
          <div className="center relative  group ">
            <img src={firstImagePath} alt="" className=" w-[70%] p-3" />
          </div>
        </div>
        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-tl-md transition-color duration-300 rounded-tr-3xl rounded-bl-3xl"
        >
          <div className="between p-4">
            {discount ? (
              <p className="rounded-sm py-1 w-10 bg-green-600 text-center md:text-base text-xs text-white">
                {discount}%
              </p>
            ) : null}

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
                  <FavoriteIcon className="text-red-600 " />
                ) : (
                  <FavoriteBorder className="text-red-600 " />
                )}
              </IconButton>
            </TooltipWrapper>
          </div>

          <button className="w-full opacity-0 bg-orange-500  group-hover:opacity-100 absolute z-10 bottom-0 py-2 font-semibold text-white text-xs transition-color duration-300 rounded-bl-3xl rounded-tr-3xl" onClick={() => setModalOpen(true)}>
            Quick View
          
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
          className="bg-white center md:p-10 p-4 center rounded-tr-[33px] rounded-bl-[33px] rounded"
          style={{ width: "90%", height: "90%" }}
        >
          <Scrollbars style={{ width: "100%", height: "100%" }}>
            <QuickView id={id} modal={true} />
          </Scrollbars>
        </div>
      </Modal>

        </div>
      </div>

      <div className="  md:space-y-2 mt-4">
        <div className="start gap-2 px-3">
          {colors.map((currentColor, index) => {
            return (
              <div key={index}>
                <ColorButton
                  currentColor={currentColor}
                  index={index}
                  colors={colors}
                  selected={selected}
                  setSelected={setSelected}
                  setIndex={setIndex}
                />
              </div>
            );
          })}
        </div>

        <Link href={`/shop/${id}`}>
          <h3 className="  font-bold uppercase text-gray-600  md:text-sm text-[10px] hover:text-chocolate pt-1.5 pl-3">
            {name}
          </h3>
        </Link>
        <p className="flex  sm:text-[20px] text-xs leading-[38px] font-extrabold text-sandyBrown px-3">
          <span className=" text-base text-gray-600 self-start md:text-[18px] sm:text-[10px] text-[9px] font-extrabold  leading-[17px] ">
            ৳
          </span>
          {price}
          <span className="self-end text-[14px] leading-[17px] font-medium">
            /1 item
          </span>
        </p>

        <div className="block group-hover:opacity-0 opacity-100 start px-3 md:pb-2 pb-5 ">
          <StarRating rating={rating} reviews={reviews} />
        </div>

        <TooltipWrapper open={open} setOpen={setOpen} message={message}>
          <button
            className="absolute bottom-0 mt-3 bg-chocolate hover:bg-chocolate/90 w-full py-2 md:text-sm text-[10px] center text-white font-semibold rounded-tr-3xl rounded-bl-3xl center gap-1 opacity-0 group-hover:opacity-100"
            onClick={() =>
              sentCartItem(setOpen, setMessage, {
                id,
                name,
                firstImagePath,
                quantity,
                price,
                stock,
                selected,
              })
            }
          >
            <CgShoppingCart className="text-lg" />
            <p>ADD TO CART</p>
          </button>
        </TooltipWrapper>
      </div>
    </div>
  );
};

export default ProductCard;
