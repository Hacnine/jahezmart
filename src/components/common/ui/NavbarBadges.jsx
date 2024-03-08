"use client";

import React from "react";
import { Badge } from "@mui/material";
import { Favorite, Login, Person, ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { useCartContext } from "../../../context_reducer/cartContext";
import { useRouter } from "next/navigation";

const NavbarBadges = () => {
  const { wishListProducts, cartProducts } = useCartContext();
  const router = useRouter();

  return (
    <div className=" flex items-center justify-evenly gap-6">
      <Badge
        className="cursor-pointer"
        badgeContent={cartProducts.length}
        color="error"
        sx={{ color: "OrangeRed" }}
        onClick={() => {
          router.push("/account/cart");
        }}
      >
        <ShoppingCart />
      </Badge>
      <Badge
        className="cursor-pointer"
        badgeContent={wishListProducts.length}
        color="error"
        sx={{ color: "OrangeRed" }}
        onClick={() => {
          router.push("/account/wishlist");
        }}
      >
        <Favorite />
      </Badge>
      <Person
        sx={{ color: "OrangeRed" }}
        className="cursor-pointer"
        onClick={() => {
          router.push("/account");
        }}
      />

      <Login
        className="cursor-pointer"
        sx={{ color: "OrangeRed" }}
        onClick={() => {
          router.push("/signin");
        }}
      />
    </div>
  );
};

export default NavbarBadges;
