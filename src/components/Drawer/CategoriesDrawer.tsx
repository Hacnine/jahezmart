"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import SearchBar from "../common/header/SearchBar";
const CategoriesDrawer: React.FC<{
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
           

            padding: "25px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/images/background/category.svg" 
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
              width:300,
              color:'#aa4400',
              fontWeight: 600
              // orangeRed:'#FF4500',
              // lightOrange:'#FF5733',
              // mushroom:'#aa4400',
            },
          }}
        >
         
        </Box>
      </Drawer>
    </div>
  );
};

export default CategoriesDrawer
