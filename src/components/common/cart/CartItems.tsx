"use client";

import React from "react";
import Box from "@mui/material/Box";
import { useCartContext } from "@/context_reducer/cartContext";
import Scrollbars from "react-custom-scrollbars-2";
import CartCard from "./CartCard";
interface CartItemProps {
  width:string;
  height:number;
  large:boolean;
}
const CartItems:React.FC<CartItemProps> = ({width, height, large}) => {
  const { cartProducts} = useCartContext();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: "16px",
          backgroundImage: "url('/images/cart-bg.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          "& a": {
            textDecoration: "none",
            marginBottom: "8px",
            width: width,
            color: "#aa4400",
            fontWeight: 600,
          },
        }}
      >
        <Scrollbars style={{ width: width, height: height }}>
          {cartProducts && cartProducts.map((product) => (
            <div className="start gap-3 backdrop-blur-sm bg-white/30   my-1">
              <CartCard {...product} large={large}/>
            </div>
          ))}
        </Scrollbars>
      </Box>
    </div>
  );
};

export default CartItems;
