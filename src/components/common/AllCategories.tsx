import React from "react";
import bed from "../../images/icons/bed.svg";
import office from "../../images/icons/office.svg";
import sofa from "../../images/icons/sofa.svg";
import restaurant from "../../images/icons/restaurant.svg";
import bed2 from "../../images/icons/bed-2.svg";
import terrace from "../../images/icons/terrace.svg";
import Image from "next/image";
import Link from "next/link";

const AllCategories = () => {
  return (
    <div className="absolute w-full left-0 z-30 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition invisible group-hover:visible">
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition"
      >
        <Image src={bed} alt="bed" height={20} width={20} />
        <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition"
      >
        <Image src={office} alt="office" height={20} width={20} />
        <span className="ml-6 text-gray-600 text-sm">Office</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition"
      >
        <Image src={bed2} alt="bed2" height={20} width={20} />
        <span className="ml-6 text-gray-600 text-sm">Mattress</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition"
      >
        <Image src={sofa} alt="sofa" height={20} width={20} />
        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition"
      >
        <Image src={restaurant} alt="restaurant" height={20} width={20} />
        <span className="ml-6 text-gray-600 text-sm">Dining</span>
      </Link>
      <Link
        href=""
        className="flex items-center px-6 py-3  hover:bg-gray-100 transition"
      >
        <Image src={terrace} alt="terrace" height={20} width={20} />
        <span className="ml-6 text-gray-600 text-sm">Terrace</span>
      </Link>
    </div>
  );
};

export default AllCategories;
