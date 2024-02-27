import React, { useState } from "react";
import { AddToCartProps } from "@/type";
import { Close, Delete } from "@mui/icons-material";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useCartContext } from "@/context_reducer/cartContext";
import Link from "next/link";
import TooltipWrapper from "../wrapper/TooltipWrapper";

const CartCard: React.FC<AddToCartProps> = ({
  id,
  firstImagePath,
  name,
  quantity,
  tempQuantity,
  stock,
  price,
  selected,
  large,
}) => {
  const { sentWishListItem,updateCartItemQuantity, deleteCartSingleProduct, addToWishList } =
    useCartContext();
    const [temporaryQuantity, setTemporaryQuantity] = useState<number>(quantity ?? tempQuantity ?? 0);
  const [openWishList, setOpenWishList] = useState(false);
  const [wishListMessage, setWishListMessage] = useState("Added to WishList!");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("Added to cart!");


  const setDecrease = () => {
    if (temporaryQuantity > 1) {
      setTemporaryQuantity(temporaryQuantity - 1);
      updateCartItemQuantity(id, temporaryQuantity - 1);
    } else {
      setTemporaryQuantity(1);
      // updateCartItemQuantity(id, temporaryQuantity)
    }
  };

  const setIncrease = () => {
    if (temporaryQuantity < stock) {
      setTemporaryQuantity(temporaryQuantity + 1);
      updateCartItemQuantity(id, temporaryQuantity + 1);
    }
    temporaryQuantity < stock
      ? setTemporaryQuantity(temporaryQuantity + 1)
      : setTemporaryQuantity(stock);
  };

  const sentToCart = () => {
    sentWishListItem(setOpenWishList, setWishListMessage, {
      id,
      name,
      firstImagePath,
      quantity,
      price,
      stock,
      selected,
    });
    deleteCartSingleProduct(setOpen,
      setMessage, id)
  };

  return (
    <>
      <Link href={`/shop/${id}`} style={{ display: 'inline-block', width: 'auto' }}>
        <img
          src={firstImagePath}
          alt=""
          className={`${large ? "w-[130px]" : "w-[80px]"} `}
        />
      </Link>
      <div className="w-full">
        <div className="between gap-3 w-full">
          <p className={` text-gray-700 font-semibold`}>{name}</p>

          <TooltipWrapper
              open={openWishList}
              setOpen={setOpenWishList}
              message={wishListMessage}
            >
          <button
            onClick={sentToCart}
            className=" bg-warning text-white  px-4 py-0.5  rounded-sm"
          >
            <FaHeartCirclePlus className=" text-lg" />
          </button>
          </TooltipWrapper>
        </div>
        <div className="between gap-5">
          <div className="font-semibold text-lg">
            <span className="text-sm "> x{temporaryQuantity}</span>
            <span className="text-sm text-orangeRed">
              {" "}
              <span className=" font-extrabold">৳</span>
              {price}
            </span>
          </div>

          <div
            className={`${
              large ? "text-lg font-semibold border " : null
            } border border-warning center rounded-sm w-fit text-gray-600`}
          >
            <button className="   px-1.5" onClick={setDecrease}>
              -
            </button>
            <button className=" border-r text-sm border-l border-r-warning border-l-warning px-1.5 ">
              {temporaryQuantity}
            </button>
            <button className="  px-1.5" onClick={setIncrease}>
              +
            </button>
          </div>
        <TooltipWrapper open={open} setOpen={setOpen} message={message}>
          <button
            onClick={() => deleteCartSingleProduct(setOpen,
              setMessage, id)}
            className=" focus-within:border-warning px-3.5 "
          >
            <Delete fontSize="small" color="warning" />
          </button>
          </TooltipWrapper>
        </div>

        <div
          className="w-4 h-4 rounded-md lg:block md:hidden"
          style={{ backgroundColor: selected }}
        ></div>
      </div>
    </>
  );
};

export default CartCard;
