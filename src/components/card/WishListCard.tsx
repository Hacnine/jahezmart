import React, { useState } from "react";
import { AddToWishListProps } from "@/type";
import { AddShoppingCart, Close, Delete } from "@mui/icons-material";
import { useCartContext } from "@/context_reducer/cartContext";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Link from "next/link";
import TooltipWrapper from "../wrapper/TooltipWrapper";
const WishListCard: React.FC<AddToWishListProps> = ({
  id,
  firstImagePath,
  name,
  price,
  quantity,
  tempQuantity,
  stock,
  selected,
}) => {
  const {
    sentCartItem,
    removeFromWishList,
    sentWishListItem,
    updateCartItemQuantity,
    deleteCartSingleProduct,
    addToWishList,
  } = useCartContext();
  const [temporaryQuantity, setTemporaryQuantity] = useState<number>(quantity ?? tempQuantity ?? 0);

  const [openWishList, setOpenWishList] = useState(false);
  const [wishListMessage, setWishListMessage] = useState("Added to WishList!");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("Added to cart!");

  const handleClick = ()=>{
    sentCartItem(setOpen, setMessage, {
      id,
      name,
      firstImagePath,
      quantity,
      price,
      stock,
      selected,
    })
    removeFromWishList(setOpenWishList, setWishListMessage, id)

  }
  return (
    <>
      <Link href={`/shop/${id}`}>
        <img src={firstImagePath} alt="" className="w-[100px]" />
      </Link>
      <div className="w-full space-y-1">
        <div className="between gap-3 w-full">
          <p className="font-semibold">{name}</p>
          <TooltipWrapper open={open} setOpen={setOpen} message={message}>
          <button
            onClick={() =>
              removeFromWishList(setOpenWishList, setWishListMessage, id)
            }
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
