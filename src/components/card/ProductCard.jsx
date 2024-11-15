"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Modal from "@mui/material/Modal";
import { FavoriteBorder } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRating from "../common/ui/StarRating";
import ColorButton from "../buttons/ColorButton";
import { useCartContext } from "../../context_reducer/cartContext";
import { CgShoppingCart } from "react-icons/cg";
import TooltipWrapper from "../wrapper/TooltipWrapper";
import Scrollbars from "react-custom-scrollbars-2";
import QuickView from "../common/ui/QuickView";
import { useRouter } from "next/navigation";
import QuickViewModal from "../home/QuickViewModal";
const ProductCard = ({
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
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(colors[0]);
  const [open, setOpen] = React.useState(false);
  const [openWishList, setOpenWishList] = React.useState(false);
  const [message, setMessage] = useState("Added to cart!");
  const [wishListMessage, setWishListMessage] = useState("Added to WishList!");
  const [favorite, setFavorite] = useState(false);
  const [index, setIndex] = useState(0);
  const firstColorKey = Object.keys(images)[index];
  const firstImagePath = images[firstColorKey]?.[0];

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

  

  const updateQueryForProductDetails = ()=>{
    // setModalOpen(true)
    const queryString = `/id=${id}&&name=${name}`;
    router.push(`/shop/product/${queryString}`);
  }

  return (
    <div className=" hover:cursor-pointer relative group shadow-md shadow-slate-300 w-full rounded-md overflow-hidden rounded-tr-3xl rounded-bl-3xl">
      <div className="w-full  h-fit relative  group ">
        <div className="">
          <div className="center relative  group ">
            <img src={firstImagePath} alt="" className=" w-[70%] p-3" />
          </div>
        </div>
        <div
          className="absolute inset-0 bg-opacity-30 bg-slate-200/20 hover:bg-black
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
              <button
                onClick={handleFavoriteClick}
                className=" size-10  bg-white hover:bg-gray-100 rounded-full"
              >
                {favorite ? (
                  <FavoriteIcon className="text-red-600 " />
                ) : (
                  <FavoriteBorder className="text-red-600 " />
                )}
              </button>
            </TooltipWrapper>
          </div>

          <QuickViewModal preview={false} id={id} name={name}/>
         
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

        <div onClick={updateQueryForProductDetails}>
          <h3 className="  font-bold uppercase text-gray-600  md:text-sm text-[11px] hover:text-chocolate pt-1.5 pl-3">
            {name}
          </h3>

          <p className="flex  md:text-[16px] leading-[38px] font-bold text-sandyBrown px-3">
            <span className=" text-base text-gray-600 self-start md:text-[16px] sm:text-[10px] text-[9px] font-extrabold  leading-[17px] ">
              ৳
            </span>
            {price}
            <span className="self-end text-[14px] leading-[17px] font-medium">
              /1 item
            </span>
          </p>
        </div>

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
