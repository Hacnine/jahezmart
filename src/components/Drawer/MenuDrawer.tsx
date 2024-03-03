"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import SearchBar from "../common/header/SearchBar";
import Link from "next/link";
import { Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
const MenuDrawer: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => {
  // const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="  w-fit md:hidden block text-mushroom">
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            bgcolor: "Khaki",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/images/background/menu.svg" width={310} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "16px",
            "& a": {
              textDecoration: "none",
              marginBottom: "8px",
              width: 300,
              color: "#aa4400",
              fontWeight: 600,
              // orangeRed:'#FF4500',
              // lightOrange:'#FF5733',
              // mushroom:'#aa4400',
            },
          }}
        >
          <Link
            href={"/home"}
            className=" border-b border-dotted border-gray-300 px-5 pb-3"
          >
            Home
          </Link>
          <Link
            className=" border-b border-dotted border-gray-300 px-5 pb-3"
            href={"/shop"}
          >
            Shop
          </Link>
          <Link
            className=" border-b border-dotted border-gray-300 px-5 pb-3"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className=" border-b border-dotted border-gray-300 px-5 pb-3"
            href={"/contact"}
          >
            Contact
          </Link>
        </Box>
      </Drawer>
    </div>
  );
};
export default MenuDrawer;
