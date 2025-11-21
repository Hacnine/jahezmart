"use client";

import React from "react";
import { Badge } from "@mui/material";
import { Favorite, Login, Person, ShoppingCart, AdminPanelSettings } from "@mui/icons-material";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { logout } from "../../../store/slices/authSlice";

const NavbarBadges = () => {
  const { wishListProducts, cartProducts } = useSelector((state) => state.cart);
  const { user: reduxUser } = useSelector((state) => state.auth);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const user = session?.user || reduxUser;

  const handleLogout = async () => {
    if (session) {
      await signOut({ redirect: false });
    }
    dispatch(logout());
    router.push("/signin");
  };

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
      {user?.role === 'admin' && (
        <Link href={"/admin"} title="Admin Panel">
          <AdminPanelSettings sx={{ color: "OrangeRed" }} className="cursor-pointer" />
        </Link>
      )}
      {user ? (
        <button onClick={handleLogout} className="cursor-pointer">
          <Login sx={{ color: "OrangeRed" }} className="rotate-180" />
        </button>
      ) : (
        <Link href={"/signin"}>
          <Login className="cursor-pointer" sx={{ color: "OrangeRed" }} />
        </Link>
      )}
    </div>
  );
};

export default NavbarBadges;
