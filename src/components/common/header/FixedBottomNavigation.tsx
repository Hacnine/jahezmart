"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import {
  Category,
  Menu,
  Search,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
import SearchDrawer from "../../Drawer/SearchDrawer";
import { useMediaQuery } from "@mui/material";
import MenuDrawer from "../../Drawer/MenuDrawer";
import CartDrawer from "../../Drawer/CartDrawer";
import CategoriesDrawer from "../../Drawer/CategoriesDrawer";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:1024px)");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="">
       {isMobile && (
    <Box sx={{ width: 500 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Menu"
            value="menu"
            icon={
              <Menu style={{ color: value === "menu" ? "red" : "#28170bff" }} />
            }
            sx={{
              color: value === "menu" ? "red" : "#28170bff",
              "& .MuiBottomNavigationAction-label": {
                color: value === "menu" ? "red" : "#28170bff",
              },
            }}
            onClick={()=>setOpen(!open)}/>

          <BottomNavigationAction
            label="Categories"
            value="categories"
            icon={
              <Category
                style={{ color: value === "categories" ? "red" : "#28170bff" }}
                />

            }
            sx={{
              color: value === "categories" ? "red" : "#28170bff",
              "& .MuiBottomNavigationAction-label": {
                color: value === "categories" ? "red" : "#28170bff",
              },
            }}
            onClick={()=>setOpen(!open)}
          />
          <BottomNavigationAction
            label="Search"
            value="search"
            icon={
              <Search
                style={{ color: value === "search" ? "red" : "#28170bff" }}
              />
            }
            sx={{
              color: value === "search" ? "red" : "#28170bff",
              "& .MuiBottomNavigationAction-label": {
                color: value === "search" ? "red" : "#28170bff",
              },
            }}
          onClick={()=>setOpen(!open)}/>

          <BottomNavigationAction
            label="Cart"
            value="cart"
            icon={
              <ShoppingCart
                style={{ color: value === "cart" ? "red" : "#28170bff" }}
              />
            }
            sx={{
              color: value === "cart" ? "red" : "#28170bff",
              "& .MuiBottomNavigationAction-label": {
                color: value === "cart" ? "red" : "#28170bff",
              },
            }}
            onClick={()=>setOpen(!open)}/>

        </BottomNavigation>

        {value === 'menu' && <MenuDrawer open={open} setOpen={setOpen} />}
        {value === 'cart' && <CartDrawer open={open} setOpen={setOpen} />}
        {value === 'categories' && <CategoriesDrawer open={open} setOpen={setOpen} />}
        {value === 'search' && <SearchDrawer open={open} setOpen={setOpen} />}



        

      </Paper>
    </Box>
       )}
    </div>
  );
}
