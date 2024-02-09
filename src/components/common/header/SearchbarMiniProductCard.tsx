

import Image from "next/image";
import React, { useState } from "react";

import { Button } from "@mui/material";
import { FavoriteBorder, HeartBroken, ShoppingCart } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRating from "../ui/StarRating";
import { BsCartCheckFill, BsCartDash } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";

interface MiniProductCardProps {
  name: string;
  category: string;
  price: number;
  discount?: number;
  images: { [color: string]: string[] } | { [color: string]: string[] }[];
  colors: string[];
  star?: number;
  rating: number;
  reviews?:number
}

const SearchbarMiniProductCard: React.FC<MiniProductCardProps> = ({
  name,
  category,
  price,
  discount,
  images,
  colors,
  star,
  rating,
  reviews
}) => {
  const [wishList, setWishList] = useState(false);
  const [cart, setCart] = useState(false);

  // const firstImagePath = images[colors[0]];

  const firstColorKey = Object.keys(images)[0];
  const firstImagePath = (images as { [color: string]: string[] })[
    firstColorKey
  ]?.[0];

  const handleWhishListClick = () => {
    setWishList(!wishList);
  };

  const handleCartClick = () =>{
    setCart(!cart);
  }
  return (
    <div className=" mb-2 relative  rounded-md overflow-hidden rounded-tr-3xl rounded-bl-3xl center  w-[350px] h-[95px] border-b border-l z-50">
      <div className="w-fit h-fit relative  group overflow-hidden">
          
        <div className="center relative group  ">
          
          <img
            src={firstImagePath}
            alt=""
            className="w-[60%] h-[60%] "
          />
        </div>

        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-md transition-color duration-300 rounded-tr-3xl rounded-bl-3xl"
        >
          {/* <div className="between px-2 mt-6">
          <IconButton onClick={handleCartClick} className="bg-white">
              {cart ? (
                <BsCartCheckFill className="text-red-600 text-base" />
                
              ) : (
                <BsCartDash  className="text-red-600 text-base" />
              )}
            </IconButton>

            <IconButton onClick={handleWhishListClick} className="bg-white">
              {wishList ? (
                <FavoriteIcon className="text-red-600 text-base" />
                
              ) : (
                <FavoriteBorder className="text-red-600 text-base" />
              )}
            </IconButton>
          </div> */}
          <button className="w-full opacity-0 bg-orange-500  group-hover:opacity-100 absolute z-10 md:bottom-0 bottom-0 py-1 font-semibold text-white text-xs transition-color duration-300 rounded-bl-3xl rounded-tr-3xl">
            Quick View
          </button>
        </div>
      </div>

      <div className=" p-3 w-full ">
        <h3 className=" font-semibold uppercase leading-5 md:text-xs text-sm hover:text-chocolate"  style={{
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '8rem'
  }}>
          {name}
        </h3>

        <span className="font-extrabold text-xs text-red-600 leading-5">
          <span className=" font-extrabold"> ৳</span> {price}
        </span>
       
        <div className="start text-xs"><StarRating rating={rating} reviews={reviews} /></div>
        {/* <button className="absolute bottom-0 bg-chocolate hover:bg-chocolate/90 w-full py-2 text-white font-semibold rounded-tr-3xl rounded-bl-3xl">
        <ShoppingCart /> ADD TO CART
      </button> */}
      </div>
     
    </div>
  );
};

export default SearchbarMiniProductCard;


