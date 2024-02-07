import Image from "next/image";
import React, { useState } from "react";

import { Button } from "@mui/material";
import { FavoriteBorder, HeartBroken, ShoppingCart } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRating from "./ui/StarRating";
import ColorButton from "../buttons/ColorButton";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  discount?: number;
  images: { [color: string]: string[] } | { [color: string]: string[] }[];
  colors: string[];
  star?: number;
  rating: number;
  reviews?: number;
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
  reviews,
}) => {
  
  const [iconColor, setIconColor] = useState(false);
  const [index, setIndex] = useState(0);


  const firstColorKey = Object.keys(images)[index];
  const firstImagePath = (images as { [color: string]: string[] })[
    firstColorKey
  ]?.[0];

  const handleIconClick = () => {
    setIconColor(!iconColor);
  };

  const [selected, setSelected] = useState<string>(colors[0]);
  return (
    <div className=" relative shadow-md shadow-slate-400 w-full rounded-md overflow-hidden md:h-[390px] h-[330px] rounded-tr-3xl rounded-bl-3xl">
      <div className="w-full  h-fit relative  group ">
        <div className="">
        <div className="center relative  group ">
          <img
            src={firstImagePath}
            alt=""
            className=" w-[70%] p-3"
          />
        </div>
        </div>
        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-tl-md transition-color duration-300 rounded-tr-3xl rounded-bl-3xl"
        >
          <div className="between p-4">
            {discount ? (
              <p className="rounded-sm py-1 w-10 bg-green-600 text-center text-white">
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
          <button className="w-full opacity-0 bg-orange-500  group-hover:opacity-100 absolute z-10 bottom-0 py-2 font-semibold text-white text-xs transition-color duration-300 rounded-bl-3xl rounded-tr-3xl">
            Quick View
          </button>
        </div>
      </div>

      <div className=" p-3 my-2 ">
        <div className="start gap-2">
        {colors.map((currentColor, index) => {
          return (
            <ColorButton
              currentColor={currentColor}
              index={index}
              colors={colors}
              selected={selected}
              setSelected={setSelected}
              setIndex={setIndex}
            />
          );
        })}
        </div>


        <h3 className=" font-semibold uppercase leading-7 md:text-base text-xs hover:text-chocolate">
          {name}
        </h3>

        <span className="font-bold text-base text-red-600 leading-7">
          <span className=" font-extrabold"> ৳</span> {price}
        </span>

        <div className="start">
          <StarRating rating={rating} reviews={reviews} />
        </div>
      </div>
      <button className="absolute bottom-0 bg-chocolate hover:bg-chocolate/90 w-full py-2 md:text-sm text-xs center text-white font-semibold rounded-tr-3xl rounded-bl-3xl">
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
