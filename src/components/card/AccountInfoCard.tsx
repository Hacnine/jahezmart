import Link from "next/link";
import React from "react";

interface AccountInfoCardProps {
  title: string;
  name: string;
  address?: string;
  email?: string;
  mobileNumber?: number;
  link: string;
}

const AccountInfoCard: React.FC<AccountInfoCardProps> = ({
  title,
  name,
  address,
  email,
  mobileNumber,
  link,
}) => {
  return (
    <div className="  shadow-md shadow-gray-300 rounded  px-4 p-5  ">
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium text-gray-800 ">{title}</p>
        <Link href={link}>
          <button className="text-orangeRed">Edit</button>
        </Link>
      </div>

      <div className="space-y-1 font-sans">
        <p className="text-gray-500 text-sm ">{name}</p>
        <p className="text-gray-500 text-sm ">{address}</p>
        <p className="text-gray-500 text-sm">{email}</p>
        <p className="text-gray-500 text-sm">{mobileNumber}</p>
      </div>
    </div>
  );
};

export default AccountInfoCard;
