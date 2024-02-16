import AccountSideBar from "@/components/common/sidebar/AccountSideBar";
import React from "react";

const Account = () => {
  return (
    <div className="wrapper grid grid-cols-12 items-start gap-6 pb-16">
      {/* <!-- Side Bar --> */}
      <div className="col-span-3">
        <AccountSideBar />
      </div>

      <div className=" col-span-3 gap-4 shadow ">
        <div className=" shadow-md rounded  px-4 pb-8 pt-6">
          <div className="flex justify-between items-center mb-4">
            <p className="font-medium text-gray-800 ">Profile</p>
            <p className="text-orangeRed">Edit</p>
          </div>

          <div className="space-y-1">
            <p className="text-gray-700 font-medium">Abu Imadullah</p>
            <p className="text-gray-800">name@email.com</p>
            <p className="text-gray-800">000 000 000</p>
          </div>
        </div>
      </div>

      <div className=" col-span-3 gap-4 shadow ">
        <div className=" shadow-md rounded  px-4 pb-8 pt-6">
          <div className="flex justify-between items-center mb-4">
            <p className="font-medium text-gray-800 ">Shipping Address </p>
            <p className="text-orangeRed">Edit</p>
          </div>

          <div className="space-y-1">
            <p className="text-gray-700 font-medium">.............</p>
            <p className="text-gray-800">........</p>
            <p className="text-gray-800">....</p>
          </div>
        </div>
      </div>

      <div className=" col-span-3 gap-4 shadow ">
        <div className=" shadow-md rounded px-4 pb-8 pt-6">
          <div className="flex justify-between items-center mb-4">
            <p className="font-medium text-gray-800 ">Billing Address </p>
            <p className="text-orangeRed">Edit</p>
          </div>

          <div className="space-y-1">
            <p className="text-gray-700 font-medium">.............</p>
            <p className="text-gray-800">........</p>
            <p className="text-gray-800">....</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
