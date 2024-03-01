"use client"

import React from "react";
import { Badge} from "@mui/material";
import { Favorite, Login, Person, ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { useCartContext } from "../../../context_reducer/cartContext";

const NavbarBadges = () => {
  const { wishListProducts, cartProducts } = useCartContext();
  return (
    <div>
      <div className=" flex items-center justify-evenly gap-6">
        <Link  href={"/account/cart"} passHref >
          <Badge
            badgeContent={cartProducts.length}
            color="error"
            sx={{ color: "OrangeRed" }}
            className=" lg:block hidden"
          >
            <ShoppingCart />
          </Badge>
        </Link>
        <Link href="/account/wishlist" passHref>
          <Badge
            badgeContent={wishListProducts.length}
            color="error"
            sx={{ color: "OrangeRed" }}
          >
            <Favorite />
          </Badge>
        </Link>

        <Link href="/account" passHref>
          <Person sx={{ color: "OrangeRed" }} />
        </Link>
        <Link href="/signin" passHref>
          <Login className="" sx={{ color: "OrangeRed" }} />
        </Link>
      </div>
    </div>
  );
};

export default NavbarBadges;
