import React from "react";
import { AddToWishListProps } from "@/type";
import { AddShoppingCart, Close, Delete } from "@mui/icons-material";
import { useCartContext } from "@/context_reducer/cartContext";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
const WishListCard: React.FC<AddToWishListProps> = ({
  id,
  firstImagePath,
  name,
  price,
  quantity,
  stock,
  selected
}) => {
  const { removeFromWishList, addToCart } = useCartContext();

  const sentToCart = ()=>{
    addToCart({ id, name, firstImagePath, quantity, price, stock, selected });
    removeFromWishList(id);
  }

  return (
    <>
      <img src={firstImagePath} alt="" className="w-[100px]" />
      <div className="w-full space-y-1">
        <div className="between gap-3 w-full">
          <p className="font-semibold">{name}</p>
          <button
            onClick={() => removeFromWishList(id)}
            className=" text-white  px-4 py-0.5  rounded-sm"
          >
            <Delete fontSize="small" color="warning" />
          </button>
        </div>
        <div className="between gap-3 w-full">
          <span className="text-sm text-orangeRed font-semibold">
            {" "}
            <span className=" font-extrabold">৳</span>
            {price}
          </span>
          <button
            onClick={sentToCart}
            className=" bg-warning text-white  px-4 py-0.5  rounded-sm"
          >
            <MdOutlineShoppingCartCheckout className="text-lg"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default WishListCard;
