"use client";
import React from "react";
import AllCategories from "./AllCategories";
import { Menu } from "@mui/icons-material";
import Headroom from "react-headroom";
import FirstHeader from "./FirstHeader";
import SearchBar from "./SearchBar";
import dynamic from 'next/dynamic';

const NavbarBadges = dynamic(() => import('../ui/NavbarBadges'), { ssr: false });
const Navbar = () => {
  return (
    <Headroom>
      <nav className=" bg-tan w-full lg:block md:hidden hidden shadow-md shadow-white z-50">
        <div className="wrapper between ">
          <div className="px-8 py-5 bg-chocolate hover:bg-sandyBrown relative flex items center cursor-pointer  z-50 group">
            <span className="text-white capitalize ml-2 center font-sans gap-1">
              <Menu /> All Categories
            </span>
            <AllCategories
              otherClasses={
                "absolute left-0 z-30 opacity-0 group-hover:opacity-100 transition invisible group-hover:visible shadow-md text-gray-600"
              }
            />
          </div>

          <SearchBar otherClasses={" hidden md:hidden"} />
          <NavbarBadges />
        </div>
      </nav>
      <div className="md:hidden block bg-tan">
        <FirstHeader />
      </div>
    </Headroom>
  );
};

export default Navbar;
