import React from "react";

import Navbar from "./Navbar";
import FirstHeader from "./FirstHeader";
const Header = () => {
  return (
    <>
      <div className="md:block hidden">
        <FirstHeader />
      </div>
      <Navbar />
    </>
  );
};

export default Header;
