"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import WishListCard from "../../../components/card/WishListCard";
import {  IconButton} from "@mui/material";
import { Menu} from "@mui/icons-material";
import CustomBreadcrumbs from "../../../components/common/ui/CustomBreadcrumbs";
import AccountSideBar from "../../../components/common/sidebar/AccountSideBar";
import AccountDrawer from "../../../components/Drawer/DynamicDrawer";
import WishListSummaryCard from "../../../components/card/WishListSummaryCard";
import { useCartContext } from "../../../context_reducer/cartContext";
const WishList = () => {
  const { wishListProducts } = useCartContext();

  const links = [{ linkName: "Wishlist", link: "/account/wishlist" }];
  const [open, setOpen] = useState(false);
  return (
    <div className="   w-full">
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
          },
        }}
      >
        <div className="flex items-start justify-evenly  md:flex-row flex-col w-full gap-5">
        {/* <div className="w-[24%] hidden lg:block  lg:center flex-col">
        <CustomBreadcrumbs links={links} />
        <AccountSideBar link="wishlist"/>
        </div> */}

        <div className=" center flex-col  lg:w-[50%] w-full">
        <div className="center w-full relative gap-5">
        <IconButton className="absolute left-0 block text-darkChocolate md:hidden" onClick={()=> setOpen(true)} >
        <Menu/>
        </IconButton>
        <img src="/images/titles/wishlist.svg" className="my-8 w-48" alt="" />
        </div>
        {wishListProducts.map((product) => (
          <div className="center gap-4  w-full backdrop-blur-sm bg-white/30 text-base font-sans  my-1 ">
            <WishListCard {...product} />
          </div>
        ))}
        </div>

        <div className="w-[24%] mt-28 mb-20 shadow-sm">
        <WishListSummaryCard />
      </div>


        </div>

      </Box>
      <AccountDrawer open={open} setOpen={setOpen} Component={AccountSideBar}/>
    </div>
  );
};

export default WishList;
