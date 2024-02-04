"use client";
import Image from "next/image";
import React, { useState } from "react";

import { Button } from "@mui/material";
import { FavoriteBorder, HeartBroken, ShoppingCart } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  discount?: number;
  images: { [color: string]: string[] } | { [color: string]: string[] }[];
  colors: string[];
  star?: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  price,
  discount,
  images,
  colors,
  star,
  rating,
}) => {
  const [iconColor, setIconColor] = useState(false);
  // const firstImagePath = images[colors[0]];
  console.log(images);

  const firstColorKey = Object.keys(images)[0];
  const firstImagePath = (images as { [color: string]: string[] })[
    firstColorKey
  ]?.[0];

  const handleIconClick = () => {
    // Change the color on each click
    setIconColor(!iconColor);
  };
  return (
    <div className=" relative shadow-md shadow-slate-400 w-fit rounded-md overflow-hidden h-[430px]">
      <div className="w-fit h-fit relative  group shadow-md ">
        <div className="center relative group px-4 ">
          <img
            src={firstImagePath}
            alt=""
            className=" md:w-[300px] w-[250px]"
          />
        </div>
        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-md transition-opacity duration-300"
        >
          <div className="between gap-44 pl-2 pt-2">
            {discount ? (
              <p className="rounded-md bg-green-600 p-1 text-white">
                {discount}$
              </p>
            ) : null}

            <IconButton onClick={handleIconClick}>
              {iconColor ? (
                <FavoriteBorder className="text-red-600" />
              ) : (
                <FavoriteIcon className="text-red-600" />
              )}
            </IconButton>
          </div>
          <button className="w-full opacity-0 bg-chocolate  group-hover:opacity-100 absolute z-10 bottom-0 py-2 font-semibold text-white">
            Quick View
          </button>
        </div>
      </div>

      <div className=" p-3 my-2 ">
        <h3 className=" font-semibold uppercase leading-7 text-lg hover:text-chocolate">
          {name}
        </h3>

        <span className="font-bold text-lg text-red-600 leading-7">
          <span className=" font-extrabold"> ৳</span> {price}
        </span>
        <p className="text-sm text-gray-700 uppercase font-semibold leading-7">
          {category}
        </p>
        <p className="font-bold text-chocolate ">{star}</p>
      </div>
      <button className="absolute bottom-0 bg-chocolate hover:bg-chocolate/90 w-full py-2 text-white font-semibold">
        <ShoppingCart /> ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;

// {
//   "id": ,
//   "name": "",
//   "price": ,
//   "discount": ,
//   "new product": ,
//   "colors": [" "],
//   "images": [
//     {"gray":["/images/products/product1.1.jpg",
//     "/images/products/product1.2.jpg"
//     ],
//   "orange":[
//     "/images/products/product1.4.jpg"
//   ],
//   "description": [
//     {
//       "Jazz it Up": "J ."
//     },
//     {
//       "Design It Your Way": " "
//     }
//   ],
//   "category": " ",
//   "featured": true,
//   "rating": ,
//   "star":  ,
//   "full_details": [
//     {
//       "Assembled_Size:": " ",

//       "Packaged Size": " ",
//       "Assembly": "Required",
//       "Made in": "Australia",
//       "Delivery type": " "
//     }
//   ]
// },
