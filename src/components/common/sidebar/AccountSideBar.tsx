import {
  Badge,
  BorderColor,
  Favorite,
  Logout,
  Payment,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

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
            href=""
            className="start gap-2 block font-medium  text-orangeRed  "
          >
            <span className="">
              <Badge />
            </span>
            Manage account
          </Link>

        <div className="pl-8">

        <Link
            href=""
            className=" hover:text-orangeRed block  capitalize transition"
          >
            Profile info
          </Link>

          <Link
            href=""
            className=" hover:text-orangeRed block  capitalize transition"
          >
            Manage Addresses
          </Link>

          <Link
            href=""
            className=" hover:text-orangeRed block  capitalize transition"
          >
            Change Password
          </Link>
        </div>
        </div>

        <div className="space-y-1 mt-3 p-2 shadow rounded-md border border-gray-100">
          <Link href="" className="start gap-2 block font-medium capitalize">
            <span className="">
              <BorderColor />
            </span>
            Order History
          </Link>

          <div className="pl-8">
            <Link
              href=""
              className=" hover:text-orangeRed block  capitalize transition"
            >
              {" "}
              Returns
            </Link>

            <Link
              href=""
              className=" hover:text-orangeRed block  capitalize transition"
            >
              {" "}
              Cancelation
            </Link>

            <Link
              href=""
              className=" hover:text-orangeRed block  capitalize transition"
            >
              {" "}
              Reviews
            </Link>
          </div>
        </div>

        <div className="space-y-1  mt-3 p-2 shadow rounded-md border border-gray-100">
          <Link
            href=""
            className=" start gap-2 block font-medium capitalize   "
          >
            <span className=" text-base">
              <Payment />
            </span>
            Payments Method
          </Link>
          <Link
            href=""
            className="pl-8 hover:text-orangeRed block  capitalize transition"
          >
            Voucher
          </Link>
        </div>

        <div className="space-y-1 mt-3 p-2 shadow rounded-md border border-gray-100">
          <Link href="" className="start gap-2 block font-medium capitalize ">
            <span className=" text-base">
              <Favorite />
            </span>
            <p> Wish List</p>
          </Link>
        </div>

        <div className="space-y-1  mt-3 p-2 shadow rounded-md border border-gray-100">
          <Link href="" className="start gap-2 block font-medium capitalize">
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
