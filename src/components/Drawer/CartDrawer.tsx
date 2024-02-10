"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import SearchBar from "../common/header/SearchBar";
const CartDrawer: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => {
  // const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="  w-fit md:hidden block">
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        sx={{
          height: 400,
          "& .MuiDrawer-paper": {
          width: 450,

            // height: 550,
            // p: 4,
            // backgroundImage: "url('/images/loading.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        }}
      >
        <Box
          sx={{
            bgcolor: "Khaki",
            paddingTop: "18px",
            paddingBottom: "18px",

            paddingRight: "35px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/images/background/cart.svg" 
          width={310}
          alt="" />
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
        ></Box>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
