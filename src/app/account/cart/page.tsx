import CartItems from "@/components/common/cart/CartItems";
import SummaryCard from "@/components/card/SummaryCard";
import AccountSideBar from "@/components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const links = [{ linkName: "Cart", link: "/account/cart" }];

const Cart = () => {
  return (
    <div className="wrapper start md:flex-row flex-col ">
      <div className="w-[24%] hidden lg:block">
        <CustomBreadcrumbs links={links} />
        <AccountSideBar />
      </div>
      <div className=" center flex-col lg:w-[50%] w-full  ">
        <div className="center w-full  gap-5">
      
        <img src="/images/titles/Cart.svg" className="my-8 w-48" alt="" />
        </div>
        <div className="w-full">
          <CartItems width={"100%"} height={900} large={true} />
        </div>
      </div>
      <div className="w-fit mt-28 mb-20 shadow-sm">
        <SummaryCard />
      </div>
    </div>
  );
};

export default Cart;
