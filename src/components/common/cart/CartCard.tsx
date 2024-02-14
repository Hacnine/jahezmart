import React from "react";
import { AddToCartProps } from "@/type";
import { Close } from "@mui/icons-material";
import { useCartContext } from "@/context_reducer/cartContext";

const CartCard: React.FC<AddToCartProps> = ({
  id,
  firstImagePath,
  name,
  quantity,
  stock,
  price,
  large
}) => {
  const { updateCartItemQuantity, deleteCartSingleProduct } = useCartContext();
  const [temporaryQuantity, setTemporaryQuantity] = React.useState<number>(quantity);

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
    temporaryQuantity < stock ? setTemporaryQuantity(temporaryQuantity + 1) : setTemporaryQuantity(stock);
  };

  return (
    <>
      <img src={firstImagePath} alt="" className={`${large ? "w-[130px]": "w-[80px]"} `} />
      <div className="w-full">
        <div className="between gap-3 w-full">
          <p className={`${large? 'text-lg':''} font-semibold`}>{name}</p>
          
        </div>
        <div className="between gap-5">
          <div className='font-semibold text-lg'>
            <span className="text-sm ">
              {" "}
              x{temporaryQuantity}
            </span>
            <span className="text-sm text-orangeRed">  <span className=" font-extrabold">৳</span>{price}</span>
          </div>

          <div className={`${large? 'text-lg font-semibold border-2 border-gray-300 center rounded-sm w-fit': ' border border-gray-300 center rounded-sm w-fit'} text-gray-600`}>
            <button className="   px-1.5" onClick={setDecrease}>
              -
            </button>
            <button className=" border-r border-l border-r-gray-300 border-l-gray-300 px-1.5 ">{temporaryQuantity}</button>
            <button
              className="  px-1.5"
              onClick={setIncrease}
            >
              +
            </button>
          </div>

          <button onClick={() => deleteCartSingleProduct(id)}>
            <Close fontSize="small" color="warning" />
          </button>
        </div>

        <div className="w-4 h-4 rounded-md bg-slate-900"></div>
      </div>
    </>
  );
};

export default CartCard;
