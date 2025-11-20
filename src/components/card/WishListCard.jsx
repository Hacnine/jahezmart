import React, { useState } from "react";
import {  Delete } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromWishlist } from "../../store/slices/cartSlice";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Link from "next/link";
import TooltipWrapper from "../wrapper/TooltipWrapper";
const WishListCard= ({
  id,
  firstImagePath,
  name,
  price,
  quantity,
  stock,
  selected,
}) => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);

  const [openWishList, setOpenWishList] = useState(false);
  const [wishListMessage, setWishListMessage] = useState("Added to WishList!");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("Added to cart!");

  const handleClick = ()=>{
    const existingProduct = cartProducts.find((item) => item.id === id);
    if (existingProduct) {
      setMessage("The Product Exist In Your Cart!");
    } else {
      dispatch(addToCart({
        id,
        name,
        firstImagePath,
        quantity,
        price,
        stock,
        selected,
      }));
      setMessage("Added to cart!");
    }
    dispatch(removeFromWishlist(id));
    setOpen(true);
    setTimeout(() => setOpen(false), 1000);
  }
  return (
    <>
      <Link href={`/shop/${id}`}>
        <img src={firstImagePath} alt="" className="w-[100px]" />
      </Link>
      <div className="w-full space-y-1 text-base font-sans">
        <div className="between gap-3 w-full">
          <p className="font-semibold">{name}</p>
          <TooltipWrapper open={open} setOpen={setOpen} message={message}>
          <button
            onClick={() => {
              dispatch(removeFromWishlist(id));
              setWishListMessage("Removed from wishlist!");
              setOpenWishList(true);
              setTimeout(() => setOpenWishList(false), 3000);
            }}
            className=" text-white  px-4 py-0.5  rounded-sm"
          >
            <Delete fontSize="small" color="warning" />
          </button>
          </TooltipWrapper>
        </div>
        <div className="between gap-3 w-full">
          <Link href={`shop/${id}`}>
            <span className="text-sm text-orangeRed font-semibold">
              {" "}
              <span className=" font-extrabold">৳</span>
              {price}
            </span>
          </Link>
          <button
            onClick={handleClick
              
            }
            className=" bg-warning text-white  px-4 py-0.5  rounded-sm"
          >
            <MdOutlineShoppingCartCheckout className="text-lg" />
          </button>
        </div>
      </div>
      
    </>
  );
};

export default WishListCard;
