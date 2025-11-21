import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Offer = ({
  image,
  offerPersentase,
  offerType,
  type,
  bg,
  id,
}) => {

    
  const router = useRouter();

  const updateQuery = ()=>{
    const queryString = `/id=${id}&&name=${offerType}`;
    // router.push(`/shop${queryString}`);
    router.replace(`/shop${queryString}`);
    // router.back();
    // router.forward();
  }

  return (
    <div
      className={` lg:w-[100%] md:w-[80%] w-full h-[235px] px-10 py-10 between`}
      style={{ background: bg }}
      onClick={updateQuery}
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
            className="button"
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
  );
};

export default Offer;
