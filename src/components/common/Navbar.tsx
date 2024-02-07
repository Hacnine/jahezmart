"use client";
import React from "react";
import AllCategories from "./AllCategories";
import { Menu } from "@mui/icons-material";
import StickyBox from "react-sticky-box";
import AppBar from "@mui/material/AppBar";
import Headroom from "react-headroom";
import Link from "next/link";
import FirstHeader from "./FirstHeader";
const Navbar = () => {
  return (
    <Headroom>
      <nav className=" bg-tan w-full md:block hidden ">
        <div className="container flex ">
          <div className="px-8 py-4 bg-chocolate hover:bg-sandyBrown flex items center cursor-pointer  z-50 group">
            <span className="text-white capitalize ml-2 center gap-1">
              <Menu /> All Categories
            </span>
            <AllCategories />
          </div>
          <div className="flex items-center justify-between flex-grow pl-12 text-white">
            <div className="flex items-center  flex-grow space-x-6 capitalize ">
              <Link href={"/home"}>Home</Link>
              <Link href={"/shop"}>Shop</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>

          <div className="text-white  pt-4">
            <a href="http://127.0.0.1:5500/dist/login.html">Login/Logout</a>
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
