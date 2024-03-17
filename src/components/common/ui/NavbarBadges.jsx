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
      <Link href={"/account/cart"}>
        <Badge
          className="cursor-pointer"
          badgeContent={cartProducts.length}
          color="error"
          sx={{ color: "OrangeRed" }}
        >
          <ShoppingCart />
        </Badge>
      </Link>
      <Link href={"/account/wishlist"}>
        <Badge
          className="cursor-pointer"
          badgeContent={wishListProducts.length}
          color="error"
          sx={{ color: "OrangeRed" }}
        >
          <Favorite />
        </Badge>
      </Link>
      <Link href={"/account"}>
        <Person sx={{ color: "OrangeRed" }} className="cursor-pointer" />
      </Link>
      <Link href={"/signin"}>
        <Login className="cursor-pointer" sx={{ color: "OrangeRed" }} />
      </Link>
    </div>
  );
};

export default NavbarBadges;
