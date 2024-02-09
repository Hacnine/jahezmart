import React from 'react'
import {
    FavoriteBorderOutlined,
    Person,
    Search,
    ShoppingCart,
    ShoppingCartCheckout,
  } from "@mui/icons-material";
  import { Badge, Button, Box, Link } from "@mui/material";
  import Image from "next/image";
import SearchBar from './SearchBar';
const FirstHeader = () => {
  return (
    <div className="md:mx-12 shadow-md md:bg-white bg-tan shadow-slate-400  container " style={{background:"white"}}>
    <div className=" py-4   between  " >
      <img src="/images/logo.svg" className=' md:w-[200px] w-[100px]' alt="logo" />

      <SearchBar/>

      <div className=" flex items-center justify-evenly gap-6">
        <Badge badgeContent={4} color="error" sx={{ color: "gray" }}>
          <ShoppingCart />
        </Badge>

        <Link href="#" underline="none">
          <Badge badgeContent={4} color="error" sx={{ color: "gray" }}>
            <FavoriteBorderOutlined />
          </Badge>
        </Link>

        <Link href="#" underline="none">
          <Person sx={{ color: "gray" }} />
        </Link>
      </div>
    </div>
  </div>
  )
}

export default FirstHeader
