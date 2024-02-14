import React from "react";
import { AddToWishListProps } from "@/type";
import { Close } from "@mui/icons-material";
import { useCartContext } from "@/context_reducer/cartContext";

const WishListCard: React.FC<AddToWishListProps> = ({
  id,
  firstImagePath,
  name,
}) => {
  const {removeFromWishList } = useCartContext();

  return (
    <>
      <img src={firstImagePath} alt="" className=" w-[80px]" />
      <div className="w-full">
        <div className="between gap-3 w-full">
          <p className="font-semibold">{name}</p>
          <button onClick={() => removeFromWishList (id)}>
            <Close fontSize="small" color="warning" />
          </button>
        </div>
       
      </div>
    </>
  );
};

export default WishListCard;
