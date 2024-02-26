import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="bg-tan rounded-md px-3 py-2 h-24 w-[300px] flex justify-center items-center gap-5 rounded-tl-3xl rounded-br-3xl">
      <Image
        src={image}
        width={48}
        height={48}
        alt={title}
        className="w-12 h-12 object-contain"
      />
      <div className=" text-mushroom">
        <h4 className="capitalize font-medium text-lg text-orangeRed">{title}</h4>
        <p className=" text-sm ">{description}</p>
      </div>
    </div>
  );
};


export default FeatureCard;
