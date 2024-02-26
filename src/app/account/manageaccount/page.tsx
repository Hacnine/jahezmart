import ProfileCard from "@/components/card/ProfileCard";
import AccountSideBar from "@/components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
import React from "react";

const ManageAccount = () => {
  return (
    <div className="wrapper mt-8   pb-16 ">
       <CustomBreadcrumbs
        links={[
          { linkName: "My Account", link: "/account" },
        ]}
      />
      {/* <!-- Side Bar --> */}
      <div className="gap-5 start">
      <div className="hidden lg:block">
        <AccountSideBar link="manageaccount"/>
      </div>

     <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
     <div className=" w-full lg:w-1/3 gap-4  ">

      <ProfileCard/>
        <div className="  shadow-md shadow-gray-300 rounded  px-4 p-5  ">
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

      <div className="w-full lg:w-1/3  gap-4  ">
        <div className=" shadow-md shadow-gray-300 rounded  px-4 p-5 ">
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

      <div className=" w-full lg:w-1/3  gap-4  ">
        <div className=" shadow-md shadow-gray-300 rounded px-4 p-5 ">
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
    </div>
  );
};

export default ManageAccount;
