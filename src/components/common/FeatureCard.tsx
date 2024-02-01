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
    
        <div className="bg-burlywood rounded-md px-3 py-6 flex justify-center items-center gap-5">
          <Image
            src={image}
            width={48}
            height={48}
            alt={title}
            className="w-12 h-12 object-contain"
          />
          <div className="text-maroon">
            <h4 className="capitalize font-medium text-lg">{title}</h4>
            <p className=" text-sm">{description}</p>
          </div>
        </div>
  );
};

export default FeatureCard;
