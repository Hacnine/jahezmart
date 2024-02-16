"use client"

import React from "react";
import {
  Favorite,
  Person,
  Search,
  ShoppingCart,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import { Badge, Button, Box } from "@mui/material";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useCartContext } from "@/context_reducer/cartContext";
const FirstHeader = () => {
  const {wishListProducts, cartProducts} = useCartContext();
  return (
    <div className=" w-full  lg:bg-white bg-tan  wrapper shadow-md shadow-slate-300 ">
      <div className=" py-4   between w-full ">
        <Link href={"/"}>
          <img
            src="/images/logo.svg"
            className=" md:w-[200px] w-[100px]"
            alt="logo"
          />
        </Link>

        <SearchBar otherClasses={" hidden md:hidden"} />

        <div className=" flex items-center justify-evenly gap-6">
          <Link href={"/account/cart"} className=" lg:block hidden">
            <Badge badgeContent={cartProducts.length} color="error" sx={{ color: "OrangeRed" }}>
              <ShoppingCart />
            </Badge>
          </Link>
          <Link href="/account/wishlist">
            <Badge badgeContent={wishListProducts.length} color="error" sx={{ color: "OrangeRed" }}>
              <Favorite />
            </Badge>
          </Link>

          <Link href="/account">
            <Person sx={{ color: "OrangeRed" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
