"use client";
import React from "react";
import AllCategories from "./AllCategories";
import { Login, Menu } from "@mui/icons-material";
import StickyBox from "react-sticky-box";
import AppBar from "@mui/material/AppBar";
import Headroom from "react-headroom";
import Link from "next/link";
import FirstHeader from "./FirstHeader";
const Navbar = () => {
  return (
    <Headroom>
      <nav className=" bg-tan w-full lg:block md:hidden hidden shadow-md shadow-slate-300 ">
        <div className="wrapper flex ">
          <div className="px-8 py-4 bg-chocolate hover:bg-sandyBrown relative flex items center cursor-pointer  z-50 group">
            <span className="text-white capitalize ml-2 center gap-1">
              <Menu /> All Categories
            </span>
            <AllCategories otherClasses={"absolute left-0 z-30 opacity-0 group-hover:opacity-100 transition invisible group-hover:visible shadow-md text-gray-600"}/>
          </div>
          <div className="flex items-center justify-between flex-grow pl-12 text-white">
            <div className="flex items-center  flex-grow space-x-6 capitalize ">
              <Link href={"/home"}>Home</Link>
              <Link href={"/shop"}>Shop</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>

          <div className="text-white px-5 bg-orangeRed  py-4">
            <Link href="/signin"><Login className=""/></Link>
          </div>
        </div>
      </nav>

      <div className="md:hidden block bg-tan">
        <FirstHeader />
      </div>
    </Headroom>
  );
};

export default Navbar;
