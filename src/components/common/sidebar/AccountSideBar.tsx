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

const AccountSideBar = () => {
  return (
    <>
      {/* <!-- Account Profile --> */}
      <div className="p-2 shadow rounded-md border border-gray-100 w-fit ">

      <div className="px-4 py-3 bg-white  md:flex md:items-center  w-[200px] gap-4 shadow rounded-md border border-gray-100">
        <div className="flex-shrink-0">
          <img
            src="/images/BeardManProfile.svg"
            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
          />
        </div>

        <div className="flex-grow ">
          <p className="text-gray-800 font-medium">Abu Imadullah</p>
        </div>
      </div>
      </div>

      {/* <!-- Account Profile End --> */}

      {/* <!-- Profile links --> */}
      <div className="bg-white w-fit col-start-1 mt-6  border border-gray-100 shadow rounded p-4 divide-y  text-gray-600 gap-4 mb-7">
        <div className="space-y-1  m p-2 shadow rounded-md border border-gray-100 ">
          <Link
            href="/account/manageaccoun"
            className="start gap-2 block font-semibold  text-orangeRed  "
          >
            <span className="t">
            <MdAccountTree className="text-xl"/>
            </span>
            Manage account
          </Link>

        <div className="pl-8">

        <Link
            href="/account/profile"
            className=" hover:text-orangeRed block  capitalize transition text-sm mb-1"
          >
            Profile info
          </Link>

          <Link
            href="/account/address"
            className=" hover:text-orangeRed block  capitalize transition text-sm mb-1"
          >
            Manage Addresses
          </Link>

          <Link
            href="/account/changepassword"
            className=" hover:text-orangeRed block  capitalize transition text-sm mb-1"
          >
            Change Password
          </Link>
        </div>
        </div>

        <div className="space-y-1 mt-3 p-2 shadow rounded-md border border-gray-100">
          <Link href="/account/orderhistory" className="start gap-2 block capitalize font-semibold">
            <span className="">
              <BorderColor />
            </span>
            Order History
          </Link>

          <div className="pl-8">
            <Link
              href="/account/returns"
              className=" hover:text-orangeRed block  capitalize transition text-sm mb-1 "
            >
              {" "}
              Returns
            </Link>

            <Link
              href="/account/cancelation"
              className=" hover:text-orangeRed block  capitalize transition text-sm mb-1"
            >
              {" "}
              Cancelation
            </Link>

            <Link
              href="/account/reviews"
              className=" hover:text-orangeRed block  capitalize transition text-sm mb-1"
            >
              {" "}
              Reviews
            </Link>
          </div>
        </div>

        <div className="space-y-1  mt-3 p-2 shadow rounded-md border border-gray-100">
          <Link
            href="/account/payment"
            className=" start gap-2 block capitalize  font-semibold "
          >
            <span className=" text-base">
              <Payment />
            </span>
            Payments Method
          </Link>
          <Link
            href="/account/voucher"
            className="pl-8 hover:text-orangeRed block  capitalize transition text-sm"
          >
            Voucher
          </Link>
        </div>

        <div className="space-y-1 mt-3 p-2 shadow rounded-md border border-gray-100">
          <Link href="/account/wishlist" className="start gap-2 block font-medium capitalize ">
            <span className=" text-base font-semibold">
              <Favorite />
            </span>
            <p className="font-semibold"> Wish List</p>
          </Link>
        </div>

        <div className="space-y-1  mt-3 p-2 shadow rounded-md border border-gray-100">
          <Link href="/signin" className="start gap-2 block capitalize font-semibold">
            <span className=" text-base">
              <Logout />
            </span>
            Log Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccountSideBar;
