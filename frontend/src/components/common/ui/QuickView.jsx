"use client";

import React, { useEffect, useState } from "react";
import CategorySlider from "../../slider/CategorySlider";
import { FavoriteBorder, Twitter } from "@mui/icons-material";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaOpencart } from "react-icons/fa";
import Link from "next/link";
import TooltipWrapper from "../../wrapper/TooltipWrapper";
import ColorButton from "../../buttons/ColorButton";
import { LuBadgeCheck, LuBadgePercent } from "react-icons/lu";
import StarRating from "./StarRating";
import SizeButton from "../../buttons/SizeButton";
import { MdFavoriteBorder } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToWishlist, removeFromWishlist } from "../../../store/slices/cartSlice";
import { useGetProductQuery } from "../../../store/api";

const QuickView = ({ id, modal, setModalOpen }) => {
  const dispatch = useDispatch();
  const { data: product, isLoading } = useGetProductQuery(id);
  const { wishListProducts, cartProducts } = useSelector((state) => state.cart);

  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

  const {
    brand,
    category,
    colors,
    description,
    discount,
    full_details,
    images,
    name,
    price,
    quantity,
    rating,
    recommended,
    reviews,
    stock,
  } = product;
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [openWishList, setOpenWishList] = React.useState(false);
  const [message, setMessage] = useState("Added to cart!");
  const [wishListMessage, setWishListMessage] = useState("Added to WishList!");
  const [selected, setSelected] = useState(colors[0]);

  const [favorite, setFavorite] = useState(false);
  const [index, setIndex] = useState(0);
  const [pathIndex, setPathIndex] = useState(0);

  const firstColorKey = Object.keys(images)[index];
  const firstImagePath = images[firstColorKey]?.[pathIndex];

  const handleFavoriteClick = () => {
    const existingProduct = wishListProducts.find((item) => item.id === id);
    if (existingProduct) {
      dispatch(removeFromWishlist(id));
      setWishListMessage("Removed from wishlist!");
      setOpenWishList(true);
      setTimeout(() => setOpenWishList(false), 3000);
    } else {
      dispatch(addToWishlist({
        id,
        name,
        firstImagePath,
        quantity,
        price,
        stock,
        selected,
      }));
      setWishListMessage("Added to wishlist!");
      setOpenWishList(true);
      setTimeout(() => setOpenWishList(false), 3000);
    }
  };
  const updateQuery = () => {
    setModalOpen(false);
    const queryString = `/id=${id}&&name=${name}`;
    router.push(`/shop/product${queryString}`);
  };
  const [tempQuantity, setTempQuantity] = React.useState(quantity);
  const setDecrease = () => {
    if (tempQuantity > 1) {
      setTempQuantity(tempQuantity - 1);
    } else {
      setTempQuantity(1);
    }
  };

  const setIncrease = () => {
    if (tempQuantity < stock) {
      setTempQuantity(tempQuantity + 1);
    }
    tempQuantity < stock
      ? setTempQuantity(tempQuantity + 1)
      : setTempQuantity(stock);
  };

  useEffect(() => {
    const existingProduct = wishListProducts.find((item) => item.id === id);
    if (existingProduct) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [wishListProducts, id]);
  const [value, setValue] = React.useState(0);

  return (
    <div className=" h-fit w-fit grid grid-cols-2  overflow-hidden md:px-0 px-4">
      <div className="sm:col-span-1 col-span-2 center flex-col">
        <img
          src={firstImagePath}
          className=" lg:h-[50%] md:h-[40%] md:w-[50%] w-[90%]"
          alt=""
        />

        <div className="grid grid-cols-5 items-center justify-between mt-3 gap-3 mb-6">
          {Object.keys(images).map((color, index2) =>
            images[color].map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt=""
                className="border border-1  w-full h-full object-cover transform transition-transform hover:scale-110 hover: cursor-pointer rounded-md shadow-md"
                onClick={() => {
                  setIndex(index2),
                    setPathIndex(index),
                    setSelected(colors[index2]);
                }}
              />
            ))
          )}
        </div>
      </div>

      <div className="sm:col-span-1 col-span-2 sm:ml-4 font-sans">
        <h1 className="md:text-3xl sm:text-xl text-lg font-semibold text-gray-600 font-sans">
          {name}
        </h1>
        <div className="mt-2 mb-2">
          <div className="  ">
            <div className="center w-[190px]">
              <StarRating rating={rating} reviews={reviews} />
              <span className="ml-3 text-gray-400 text-sm">
                ({reviews} Reviews)
              </span>
            </div>

            <>
              {recommended ? (
                <span className=" font-semibold text-sm text-orangeRed flex items-center md:mt-0 mt-2 ">
                  <LuBadgeCheck className="mr-1  text-colorRed text-xl" />
                  Recommended for you.
                </span>
              ) : null}
            </>
          </div>

          <>
            {discount ? (
              <div className="flex items-center my-2 gap-1 text-colorRed font-semibold">
                <p className="font-semibold text-gray-600 ">Discount:</p>
                <p className="text-sm">{discount}</p>
                <LuBadgePercent className="text-colorRed  text-xl" />
              </div>
            ) : null}
          </>

          <div className="my-2  font-semibold  text-base">
            <span className="text-gray-600">Availability:</span>
            <span className="text-green-600 ml-2 text-sm ">
              {stock} In Stock
            </span>
          </div>

          <div className="mt-2 mb-2  ">
            <span className="text-gray-600 font-semibold">Brand:</span>
            <span className=" text-sm ml-2 text-gray-600 ">{brand}</span>
          </div>

          <div className="mt-2 mb-2 ">
            <span className="text-gray-600 font-semibold">Category:</span>
            <span className=" text-sm ml-2 text-gray-600 ">{category}</span>
          </div>

          <div className="mt-2  font-roboto space-x-2 ">
            <span className=" text-orangeRed font-semibold text-base">
              Price:
              <span className="   text-gray-600 text-base line-through ">
                <span className=" ml-3 font-extrabold text-sm">৳</span> {price}
              </span>
              <span className=" ml-3 font-extrabold text-base">৳</span>
              <span>{price - 200}</span>
            </span>
          </div>

          <SizeButton />

          <div className="pt-4">
            <p className="text-gray-600 font-semibold">Color</p>

            <div className="start gap-2 ">
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
          </div>

          <div
            className={`
              "text-lg font-semibold border mt-4 border-warning center rounded-sm w-fit text-gray-600`}
          >
            <button className="   px-2 py-0.5" onClick={setDecrease}>
              -
            </button>
            <button className=" border-r text-sm border-l border-r-warning border-l-warning px-2 py-0.5 ">
              {tempQuantity}
            </button>
            <button className="  px-2 py-0.5" onClick={setIncrease}>
              +
            </button>
          </div>

          <div className="gap-2 flex items-center pb-5 mt-6 ">
            <TooltipWrapper open={open} setOpen={setOpen} message={message}>
              <button
                className={`${
                  modal
                    ? "w-24 h-8 text-xs"
                    : " sm:w-48 sm:h-10 w-32 h-8 sm:text-base text-xs"
                } text-white  border-2 bg-orangeRed hover:text-orangeRed hover:bg-white font-semibold border-orangeRed  flex items-center justify-center    gap-4 rounded group transition-colors duration-300`}
                onClick={() => {
                  const existingProduct = cartProducts.find((item) => item.id === id);
                  if (existingProduct) {
                    setMessage("The Product Exist In Your Cart!");
                  } else {
                    dispatch(addToCart({
                      id,
                      name,
                      firstImagePath,
                      quantity: tempQuantity,
                      price,
                      stock,
                      selected,
                    }));
                    setMessage("Added to cart!");
                  }
                  setOpen(true);
                  setTimeout(() => setOpen(false), 1000);
                }}
              >
                <FaOpencart
                  className={`${
                    modal ? "hidden" : "sm:text-2xl text-base  font-extrabold"
                  }`}
                />
                ADD TO CART
              </button>
            </TooltipWrapper>

            <TooltipWrapper
              open={openWishList}
              setOpen={setOpenWishList}
              message={wishListMessage}
            >
              <button
                className={`${
                  modal
                    ? "w-24 h-8 text-xs"
                    : " sm:w-48 sm:h-10 w-32 h-8 sm:text-base text-xs"
                } *:
                  text-darkChocolate  border-2 hover:bg-darkChocolate hover:text-white font-bold border-darkChocolate center gap-4 rounded group transition-colors duration-300
                  `}
                onClick={handleFavoriteClick}
              >
                <MdFavoriteBorder
                  className={`${
                    modal
                      ? "hidden"
                      : "group-hover:text-white sm:text-2xl text-lg "
                  }  text-darkChocolate hover:text-white`}
                />{" "}
                WISH LIST
              </button>
            </TooltipWrapper>
          </div>

          <hr className="border-t border-gray-200 " />
          <div className="mt-5 mb-6 flex items-center gap-2 text-orangeRed">
            <div className=" w-8 h-8 border border-orangeRed  flex justify-center items-center rounded-full">
              <Link href="" className="0 ">
                <FaFacebookF />
              </Link>
            </div>

            <div className=" w-8 h-8 border border-orangeRed  flex justify-center items-center rounded-full">
              <Link href="">
                <BsInstagram />
              </Link>
            </div>

            <div className=" w-8 h-8 border border-orangeRed  flex justify-center items-center rounded-full">
              <Link href="" className="0 ">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {modal ? (
        <button
          className=" col-span-2  mt-3 bg-darkChocolate hover:bg-darkChocolate/90 w-full py-2 md:text-sm text-base center text-white font-semibold rounded-tr-3xl rounded-bl-3xl center gap-1 group-hover:opacity-100"
          onClick={updateQuery}
        >
          View More{" "}
        </button>
      ) : null}
    </div>
  );
};

export default QuickView;
