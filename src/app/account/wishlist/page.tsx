"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useCartContext } from "@/context_reducer/cartContext";
import Scrollbars from "react-custom-scrollbars-2";
import WishListCard from "@/components/card/WishListCard";
import { Breadcrumbs, IconButton, Stack } from "@mui/material";
import { Favorite, Home, Menu, NavigateNext } from "@mui/icons-material";
import Link from "next/link";
import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
import AccountSideBar from "@/components/common/sidebar/AccountSideBar";
import AccountDrawer from "@/components/Drawer/DynamicDrawer";
const WishList = () => {
  const { wishListProducts } = useCartContext();
  const links = [{ linkName: "Wishlist", link: "/account/wishlist" }];
  const [open, setOpen] = useState<boolean>(false);
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
            // color: "#aa4400",
            fontWeight: 600,
          },
        }}
      >
        <div className="start w-full gap-5">
        <div className="px-6 bg-white shadow-md md:block hidden">
        <CustomBreadcrumbs links={links} />
        <AccountSideBar/>
        </div>

        <div className=" w-full">
        <div className="center w-full relative gap-5">
        <IconButton className="absolute left-0 block text-darkChocolate md:hidden" onClick={()=> setOpen(true)} >
        <Menu/>
        </IconButton>
        <img src="/images/titles/wishlist.svg" className="my-8 w-48" alt="" />
        </div>
        {wishListProducts.map((product) => (
          <div className="center gap-4 backdrop-blur-sm bg-white/30   my-1 ">
            <WishListCard {...product} />
          </div>
        ))}
        </div>

        </div>

      </Box>
      <AccountDrawer open={open} setOpen={setOpen} Component={AccountSideBar}/>
    </div>
  );
};

export default WishList;
