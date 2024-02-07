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
const FirstHeader = () => {
  return (
    <div className="md:mx-10 shadow-md md:bg-white bg-tan shadow-slate-400  container mx-auto" style={{background:"white"}}>
    <div className=" py-4   flex  items-center justify-between " >
      <Image src="/images/logo.svg" width={200} height={200} alt="logo" />

      <div className=" lg:flex items-center justify-center  hidden ">
        <input
          type="text"
          className="w-full border border-gray-300  border-r-0 pl-12 py-3 focus:ring-0 focus:ring-transparent rounded-l-full "
        />

        <Button
          startIcon={<Search fontSize="large" />}
          className="bg-chocolate hover:bg-sandyBrown text-white"
          sx={{
            backgroundColor: "chocolate",
            px: 4,
            py: 1.5,
            color:'white',
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          Search
        </Button>
      </div>

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
