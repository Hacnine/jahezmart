"use client";

import React from "react";
import {
  Favorite,
  Login,
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
import NavbarBadges from "../ui/NavbarBadges";
import { BiChevronDown } from "react-icons/bi";
const FirstHeader = () => {
  const { wishListProducts, cartProducts } = useCartContext();
  return (
    <div className=" w-full  lg:bg-white bg-tan  wrapper shadow-md shadow-slate-300 py-2">
      <div className=" py-4   between w-full ">
        <Link href={"/"}>
          <img
            src="/images/logo.svg"
            className=" md:w-[200px] w-[100px]"
            alt="logo"
          />
        </Link>

        <div className="lg:flex items-center justify-between flex-grow pl-12 text-gray-600  hidden font-semibold">
          <div className="flex items-center  flex-grow space-x-6 capitalize ">
            <Link href={"/home"}>Home</Link>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <div className="flex items-center">
              <p>Pages</p> <BiChevronDown />
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <NavbarBadges />
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
