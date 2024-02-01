import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";

interface FeatureCardProps {
  image: StaticImageData;
  title: string;
}

const ShopByCategory: React.FC<FeatureCardProps> = ({ image, title }) => {
  return (
    <>
      <div className="relative rounded-sm overflow-hidden group">
        <Image
          src={image}
          
          className="w-full "
          alt={title}
        />
        <Link href={""}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-sl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            
            <p className="group-hover:-translate-x-2 transition-transform text-lg ">{title}</p>
            <ArrowRightAlt className="group-hover:translate-x-2 -translate-x-6   text-white text-opacity-0 group-hover:text-opacity-100"/>

          </div>
        </Link>
      </div>
    </>
  );
};

export default ShopByCategory;
