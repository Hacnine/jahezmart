import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AllCategoriesProps {
  otherClasses?:string
}

const AllCategories:React.FC<AllCategoriesProps> = ({otherClasses}) => {
  return (
    <div className={` ${otherClasses} w-full  top-full bg-white  py-3 `}>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition border-b border-dotted border-gray-300"
      >
        <Image src={"/images/icons/bed.svg"} alt="bed" height={30} width={30} />
        <span className="ml-6  text-sm">Bedroom</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition border-b border-dotted border-gray-300"
      >
        <Image src={"/images/icons/office.svg"} alt="office" height={30} width={30} />
        <span className="ml-6   text-sm">Office</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition border-b border-dotted border-gray-300"
      >
        <Image src={"/images/icons/bed-2.svg"} alt="bed2" height={30} width={30} />
        <span className="ml-6   text-sm">Mattress</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition border-b border-dotted border-gray-300"
      >
        <Image src={"/images/icons/sofa.svg"} alt="sofa" height={30} width={30} />
        <span className="ml-6   text-sm">Sofa</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition border-b border-dotted border-gray-300"
      >
        <Image src={"/images/icons/restaurant.svg"} alt="restaurant" height={30} width={30} />
        <span className="ml-6   text-sm">Dining</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition border-b border-dotted border-gray-300"
      >
        <Image src={"/images/icons/terrace.svg"} alt="Kids Farniture" height={30} width={30} />
        <span className="ml-6   text-sm">Kids Farniture</span>
      </Link>
    </div>
  );
};

export default AllCategories;
