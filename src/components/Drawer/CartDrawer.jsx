import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CartItems from "../common/cart/CartItems";
const CartDrawer = ({ open, setOpen }) => {
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
            width: 320,

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
          <div className="center gap-1">
            <img src="/images/background/cart.svg" width={310} alt="" />
          </div>
        </Box>
        <CartItems width={"300"} height={300} large={false} />
      </Drawer>
    </div>
  );
};

export default CartDrawer;
