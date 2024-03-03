"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import SearchBar from "../common/header/SearchBar";
const SearchDrawer: React.FC<{
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
        anchor="top"
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: 300,
          height: 400,
          "& .MuiDrawer-paper": {
            height: 550,
            p: 4,
            backgroundImage: "url('/images/loading.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchBar otherClasses={" lg:hidden block w-[90%]"} />
        </Box>
      </Drawer>
    </div>
  );
};

export default SearchDrawer;
