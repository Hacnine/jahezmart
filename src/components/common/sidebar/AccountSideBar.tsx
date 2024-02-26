import {
  Badge,
  BorderColor,
  Favorite,
  Logout,
  Payment,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { MdAccountTree } from "react-icons/md";

interface AccountSideBarProps{
  link:string
}
const AccountSideBar:React.FC<AccountSideBarProps> = ({link}) => {
  return (
    <div className="text-sm">
      <div className=" rounded-md shadow-md shadow-gray-300 w-fit ">

      <div className="p-4 bg-white  md:flex md:items-center  w-[233px] gap-4  rounded-md 
       ">
        <div className="">
          <img
            src="/images/BeardManProfile.svg"
            className="rounded-full w-14 h-14 border   p-1 object-cover"
          />
        </div>

        <div className=" ">
          <p className="text-gray-800 font-medium text-sm">Abu Imadullah</p>
        </div>
      </div>
      </div>

      {/* <!-- Account Profile End --> */}

      {/* <!-- Profile links --> */}
      <div className="bg-white w-fit col-start-1 mt-6   rounded divide-y  text-gray-600 gap-4 mb-7">
        <div className="space-y-1  p-4  w-[233px] rounded-md  shadow-md shadow-gray-300">
          <Link
            href="/account/manageaccount"
            className={`${link === 'manageaccount'? "text-orangeRed":"text-gray-600  "} start gap-2 block font-semibold `}
          >
            <span className="t">
            <MdAccountTree className="text-xl"/>
            </span>
            Manage account
          </Link>

        <div className="pl-8">

        <Link
            href="/account/profile"
            className= {`${link === 'profile'? "text-orangeRed":"text-gray-600  "}   hover:text-orangeRed block  capitalize transition text-sm mb-1`}
          >
            Profile info
          </Link>

          <Link
            href="/account/address"
            className= {`${link === 'address'? "text-orangeRed":"text-gray-600  hover:text-orangeRed "}  capitalize transition  pt-2  text-sm`} 
          >
            Manage Addresses
          </Link>

          <Link
            href="/account/changepassword"
            className=  {`${link === 'changepassword'? "text-orangeRed":"text-gray-600  "}  hover:text-orangeRed block  capitalize transition text-sm mb-1`}
          >
            Change Password
          </Link>
        </div>
        </div>

        <div className="space-y-1 mt-3 p-2  rounded-md shadow-md shadow-gray-300 ">
          <Link href="/account/order/orderhistory" className=  {`${link === 'orderhistory'? "text-orangeRed":"text-gray-600  "}  start gap-2 block capitalize font-semibold`}>
            <span className="">
              <BorderColor />
            </span>
            Order History
          </Link>

          <div className="pl-8">
            <Link
              href="/account/order/returns"
              className=  {`${link === 'returns'? "text-orangeRed":"text-gray-600  "}   hover:text-orangeRed block  capitalize transition text-sm mb-1`} 
            >
              {" "}
              Returns
            </Link>

          </div>
        </div>

        <div className="space-y-1  mt-3 p-2  rounded-md shadow-md shadow-gray-300  ">
          <Link
            href="/account/payment"
            className= {`${link === 'payment'? "text-orangeRed":"text-gray-600  "} start gap-2 block capitalize  font-semibold  `} 
          >
            <span className=" text-base">
              <Payment />
            </span>
            Payments Method
          </Link>
          <Link
            href="/account/voucher"
            className= {`${link === 'voucher'? "text-orangeRed":"text-gray-600  "}  pl-8 hover:text-orangeRed block  capitalize transition text-sm`} 
          >
            Voucher
          </Link>
        </div>

        <div className="space-y-1 mt-3 p-2  rounded-md shadow-md shadow-gray-300  ">
          <Link href="/account/wishlist" className= {`${link === 'wishlist'? "text-orangeRed":"text-gray-600  "}  start gap-2 block font-medium capitalize`}  >
            <span className=" text-base font-semibold">
              <Favorite />
            </span>
            <p className="font-semibold"> Wish List</p>
          </Link>
        </div>

        <div className="space-y-1  mt-3 p-2  rounded-md shadow-md shadow-gray-300  ">
          <Link href="/signin" className= {`${link === 'signin'? "text-orangeRed":"text-gray-600  "}  `} >
            <span className=" text-base">
              <Logout />
            </span>
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSideBar;
