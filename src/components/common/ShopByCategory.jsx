import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";


const ShopByCategory = ({ image, title }) => {
  return (
    <>
      {/* <div class="relative rounded-sm overflow-hidden group">
        <img src="/images/category/category-1.jpg" class="w-full" alt="">
        <a href=""
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-sl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</a>
      </div> */}

      <div className="relative  overflow-hidden group  w-[100%]">
        <img
          src={image}
          // md:w-[386px]  md:h-[243px]
          className="md:w-[386px]  md:h-[250px] w-[250px] h-[150px]"
          // width={386}
          // height={241}
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
