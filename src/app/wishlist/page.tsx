"use client";

import React from "react";
import Box from "@mui/material/Box";
import { useCartContext } from "@/context_reducer/cartContext";
import Scrollbars from "react-custom-scrollbars-2";
import WishListCard from "@/components/wishlist/WishListCard";
const WishList = () => {
  const { wishListProducts} = useCartContext();

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
            width: 300,
            color: "#aa4400",
            fontWeight: 600,
          },
        }}
      >
        <Scrollbars style={{ width: 280, height: 300 }}>
          {wishListProducts.map((product) => (
            <div className="center gap-1 backdrop-blur-sm bg-white/30   my-1">
              <WishListCard {...product} />
            </div>
          ))}
        </Scrollbars>
      </Box>
    </div>
  );
}

export default WishList;
