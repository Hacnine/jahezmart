import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const Offer = ({
  image,
  offerPersentase,
  offerType,
  type,
  bg,
  id,
}) => {
  return (
    <Link href={`/shop/${id}`} className="w-full center">
    <div
      className={` lg:w-[100%] md:w-[80%] w-full h-[235px] px-10 py-10 between`}
      style={{ background: bg }}
    >
      <div className=" w-fit ">
        <p className="text-lg font-semibold text-red-500  leading-9">
          {offerPersentase}
        </p>
        <p className="lg:text-xl md:text-lg text-base font-bold text-gray-900">
          {offerType}
        </p>
        <p className=" text-gray-600 md:text-base text-sm leading-8">{type}</p>
          <button
            className="px-3 py-2 rounded-md bg-sandyBrown mt-2 text-white text-sm hover:bg-tan"
            style={{ backgroundColor: "chocolate" }}
          >
            SHOP NOW
          </button>
      </div>

      <img
        src={image}
        alt={offerType}
        className=" hover:scale-110 hover:cursor-pointer transition-transform duration-500 w-44 "
      />
    </div>
    </Link>
  );
};

export default Offer;
