import CartItems from "../../../components/common/cart/CartItems";
import SummaryCard from "../../../components/card/OrderSummaryCard";
import React from "react";

export const metadata = {
  title: "Cart"
}
const Cart = () => {
  return (
    <div className="flex items-start justify-evenly  md:flex-row flex-col w-full gap-5">
      <div className=" center flex-col lg:w-[50%] w-full  ">
        <div className="center w-full  gap-5">
      
        <img src="/images/titles/Cart.svg" className="my-8 w-48" alt="cart image" />
        </div>
        <div className="w-full">
          <CartItems width={"100%"} height={900} large={true} />
        </div>
      </div>
      <div className="w-fit mt-28 mb-20 shadow-sm">
        <SummaryCard children={"Checkout"}/>
      </div>
    </div>
  );
};

export default Cart;
