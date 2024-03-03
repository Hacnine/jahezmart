"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import SearchBar from "../common/header/SearchBar";
import AllCategories from "../common/header/AllCategories";
import AccountSideBar from "../common/sidebar/AccountSideBar";
const AccountDrawer: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  Component: React.ComponentType<any>;
}> = ({ open, setOpen, Component }) => {
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
          <img src="" width={310} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& a": {
              textDecoration: "none",
              marginBottom: "8px",
              width: 300,
              color: "#aa4400",
              fontWeight: 600,
            },
          }}
        >
          {/* <AccountSideBar/> */}
          {<Component />}
        </Box>
      </Drawer>
    </div>
  );
};

export default AccountDrawer;
