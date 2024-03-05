import React from "react";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";


const ShopByCategory = ({ image, title }) => {
  return (
    <>
      <div className="relative  overflow-hidden group  w-[100%]">
        <img
          src={image}
          className="md:w-[386px]  md:h-[250px] w-[250px] h-[150px]"
          alt={title}
        />
        <Link href={""}>
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex items-center justify-center text-sm text-white  font-medium ">
            <p className="group-hover:-translate-x-2 transition-transform md:text-lg text-sm">
              {title}
            </p>
            <ArrowRightAlt className="group-hover:translate-x-2 -translate-x-6   text-white text-opacity-0 group-hover:text-opacity-100" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ShopByCategory;
