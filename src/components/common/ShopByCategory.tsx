import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";

interface FeatureCardProps {
  image: string;
  title: string;
}

const ShopByCategory: React.FC<FeatureCardProps> = ({ image, title }) => {
  return (
    <>
      <div className="relative rounded-sm overflow-hidden group rounded-bl-[200px] rounded-tr-[200px] ">
        <img
          src={image}
          
          className="md:w-[386px]  md:h-[243px] w-[171px] h-[110px] "
          width={386}
          height={241}
          alt={title}
          
        />
        <Link href={""}>
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex items-center justify-center text-sl text-white  font-medium ">
            
            <p className="group-hover:-translate-x-2 transition-transform md:text-lg text-xs">{title}</p>
            <ArrowRightAlt className="group-hover:translate-x-2 -translate-x-6   text-white text-opacity-0 group-hover:text-opacity-100"/>

          </div>
        </Link>
      </div>
    </>
  );
};

export default ShopByCategory;
