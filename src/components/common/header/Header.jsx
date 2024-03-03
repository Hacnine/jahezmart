import React from "react";

import Navbar from "./Navbar";
import FirstHeader from "./FirstHeader";
const Header = () => {
  return (
    <>
      <div className="md:block hidden w-full max-w-[1350px] mx-auto font-sans">
        <FirstHeader />
      </div>
      <Navbar />
    </>
  );
};

export default Header;
