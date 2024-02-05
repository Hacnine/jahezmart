
import Image from "next/image";
import React, { useState } from "react";

import { Button } from "@mui/material";
import { FavoriteBorder, HeartBroken, ShoppingCart } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRating from "./ui/StarRating";

interface ProductCardProps {
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

const ProductCard: React.FC<ProductCardProps> = ({
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
  const [iconColor, setIconColor] = useState(false);
  // const firstImagePath = images[colors[0]];
  console.log('reviews', reviews);

  const firstColorKey = Object.keys(images)[0];
  const firstImagePath = (images as { [color: string]: string[] })[
    firstColorKey
  ]?.[0];

  const handleIconClick = () => {
    // Change the color on each click
    setIconColor(!iconColor);
  };
  return (
    <div className=" relative shadow-md shadow-slate-400 w-fit rounded-md overflow-hidden h-[430px] rounded-tr-3xl rounded-bl-3xl">
      <div className="w-fit h-fit relative  group ">
        <div className="center relative group p-4 ">
          <img
            src={firstImagePath}
            alt=""
            className=" md:w-[300px] w-[250px] h-[223px]"
          />
        </div>
        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-md transition-color duration-300 rounded-tr-3xl rounded-bl-3xl"
        >
          <div className="between gap-44 p-2">
            {discount ? (
              <p className="rounded-sm w-10 bg-green-600 p-1 text-center text-white">
                {discount}%
              </p>
            ) : null}

            <IconButton onClick={handleIconClick} className="bg-white">
              {iconColor ? (
                <FavoriteIcon className="text-red-600" />
                
              ) : (
                <FavoriteBorder className="text-red-600" />
              )}
            </IconButton>
          </div>
          <button className="w-full opacity-0 bg-orange-500  group-hover:opacity-100 absolute z-10 bottom-0 py-2 font-semibold text-white transition-color duration-300 rounded-bl-3xl rounded-tr-3xl">
            Quick View
          </button>
        </div>
      </div>

      <div className=" p-3 my-2 ">
        <h3 className=" font-semibold uppercase leading-7 text-base hover:text-chocolate">
          {name}
        </h3>

        <span className="font-bold text-base text-red-600 leading-7">
          <span className=" font-extrabold"> ৳</span> {price}
        </span>
       
        <div className="start"><StarRating rating={rating} reviews={reviews} /></div>
      </div>
      <button className="absolute bottom-0 bg-chocolate hover:bg-chocolate/90 w-full py-2 text-white font-semibold rounded-tr-3xl rounded-bl-3xl">
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
