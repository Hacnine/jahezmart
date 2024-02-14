import React from "react";
import {
  FavoriteBorderOutlined,
  Person,
  Search,
  ShoppingCart,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import { Badge, Button, Box } from "@mui/material";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
const FirstHeader = () => {
  return (
    <div className=" w-full  lg:bg-white bg-tan  wrapper shadow-md shadow-slate-300 ">
      <div className=" py-4   between w-full ">
        <Link href={"/"}>
          <img
            src="/images/logo.svg"
            className=" md:w-[200px] w-[160px]"
            alt="logo"
          />
        </Link>

        <SearchBar otherClasses={" hidden md:hidden"} />

        <div className=" flex items-center justify-evenly gap-6">
          <Link href={"/cart"}>
            <Badge badgeContent={4} color="error" sx={{ color: "OrangeRed" }}>
              <ShoppingCart />
            </Badge>
          </Link>
          <Link href="/wishlist">
            <Badge badgeContent={4} color="error" sx={{ color: "OrangeRed" }}>
              <FavoriteBorderOutlined />
            </Badge>
          </Link>

          <Link href="#">
            <Person sx={{ color: "OrangeRed" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
