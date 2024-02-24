import AccountSideBar from "@/components/common/sidebar/AccountSideBar";
import React from "react";

const ManageAccount = () => {
  return (
    <div className="wrapper mt-8  start pb-16 gap-5">
      {/* <!-- Side Bar --> */}
      <div className="">
        <AccountSideBar />
      </div>

     <div className=" flex items-center  lg:justify-between md:flex-col lg:flex-row w-full gap-6">
     <div className=" w-full lg:w-[275px] gap-4  ">
        <div className=" shadow border border-gray-100 rounded  px-4 p-5 ">
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

      <div className="w-full lg:w-[275px]  gap-4  ">
        <div className=" shadow border border-gray-100 rounded  px-4 p-5 ">
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

      <div className=" w-full lg:w-[275px]  gap-4  ">
        <div className=" shadow border border-gray-100 rounded px-4 p-5 ">
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
    </div>
  );
};

export default ManageAccount;
