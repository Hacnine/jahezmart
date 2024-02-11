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
  stock:number
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
  stock
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


  // const [check, setCheck] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  // useEffect(() => {
  //   getColor(check);
  // }, [check]);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  // const sentCartItem = () => {
    // Check if the product is already in the cart
    // const existingProduct = cartProducts.find((item) => item.id === id);

    // if (existingProduct) {
      // If product is already in the cart, update the quantity
      // addCartItem(id, name, image[0].url, existingProduct.amount + amount, check, price, stock);
    // } else {
      // If product is not in the cart, add it
      // addCartItem(id, name, image[0].url, amount, check, price, stock);
    // }

  const [selected, setSelected] = useState<string>(colors[0]);
  return (
    <div className=" relative shadow-md shadow-slate-400 w-full rounded-md overflow-hidden rounded-tr-3xl rounded-bl-3xl">
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


        <h3 className=" font-bold uppercase leading-7 md:text-base text-xs hover:text-chocolate p-3">
          {name}
        </h3>
        <p className='flex  text-[20px] leading-[38px] font-extrabold text-sandyBrown px-3'>
        <span className=' text-base text-gray-600 self-start text-[18px] font-extrabold  leading-[17px] '> ৳</span>
        {price}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/1 item</span>
      </p>

       

        <div className="start px-3 pb-14">
          <StarRating rating={rating} reviews={reviews} />
        </div>

        <button className="absolute bottom-0 mt-3 bg-chocolate hover:bg-chocolate/90 w-full py-2 md:text-sm text-xs center text-white font-semibold rounded-tr-3xl rounded-bl-3xl">
        <ShoppingCart /> ADD TO CART
      </button>
      </div>
      
    </div>
  );
};

export default ProductCard;
