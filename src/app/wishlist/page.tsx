"use client";

import React from "react";
import Box from "@mui/material/Box";
import { useCartContext } from "@/context_reducer/cartContext";
import Scrollbars from "react-custom-scrollbars-2";
import WishListCard from "@/components/wishlist/WishListCard";
import { Breadcrumbs, Stack } from "@mui/material";
import { Favorite, Home, NavigateNext } from "@mui/icons-material";
import Link from "next/link";
import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
const WishList = () => {
  const { wishListProducts } = useCartContext();
  type Link = {
    linkName: string;
    link: string;
  };
  
  const links: Link[] = [{linkName:"Wishlist", link:"/account/wishlist"}]
  return (
    <div className="wrapper ">
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: "url('/images/background/wishlist.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          "& a": {
            textDecoration: "none",
            marginBottom: "8px",
            color: "#aa4400",
            fontWeight: 600,
          },
        }}
      >

       <CustomBreadcrumbs links={links}/>

        {wishListProducts.map((product) => (
          <div className="center gap-4 backdrop-blur-sm bg-white/30   my-1 ">
            <WishListCard {...product} />
          </div>
        ))}
      </Box>
    </div>
  );
};

export default WishList;
