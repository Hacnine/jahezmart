"use client";
import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import StarRating from "../common/ui/StarRating";
import { BsCart, BsCartCheckFill } from "react-icons/bs";
import { useCartContext } from "../../context_reducer/cartContext";
import Link from "next/link";

import { useRouter } from "next/navigation";
import QuickViewModal from "../home/QuickViewModal";

const MiniProductCard = ({
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


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cart, setCart] = useState(false);

  const [selected, setSelected] = useState(colors[0]);
  const [open, setOpen] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
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

  const router = useRouter();
  const updateQuery = () => {
    const queryString = `/id=${id}&&name=${name}`;
    router.push(`/shop/product${queryString}`);
  };



  return (
    <div className=" mb-2 relative group  rounded-md overflow-hidden  start md:flex-row flex-col md:w-[276px] md:h-[95px] w-full">
      <div className="w-fit h-fit relative  group overflow-hidden">
        <div className="center    ">
          <img src={firstImagePath} alt="" className="md:w-[90%] p-3 w-[60%]" />
        </div>

        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-md transition-color duration-300 center w-full"
        >
          <div className="center group-hover:gap-2 group-hover:transition-transform group-hover:duration-900 relative px-2 w-full">
            <button
              onClick={handleCartClick}
              className=" w-7 h-7 rounded-full bg-slate-300 center"
            >
              {cart ? (
                <BsCartCheckFill className="text-red-600 text-base" />
              ) : (
                <BsCart className="text-red-600 text-base" />
              )}
            </button>
            <QuickViewModal preview={true} id={id} name={name}/>
            <button
              onClick={handleFavoriteClick}
              className=" size-7 rounded-full bg-slate-300 center"
            >
              {favorite ? (
                <MdFavorite className="text-red-600 text-lg" />
              ) : (
                <MdFavoriteBorder className="text-red-600 text-lg" />
              )}
            </button>
          </div>
        </div>
      </div>



      <div className=" p-3 w-full cursor-pointer " onClick={updateQuery}>
        <h3 className=" font-bold text-gray-700 uppercase leading-5  md:text-sm text-[11px]  hover:text-chocolate">
          {name}
        </h3>

        <span className="font-extrabold text-xs text-red-600 leading-5">
          <span className=" font-extrabold"> ৳</span> {price}
        </span>

        <div className="start text-xs">
          <StarRating rating={rating} reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default MiniProductCard;
