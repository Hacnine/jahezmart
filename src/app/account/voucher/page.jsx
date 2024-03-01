import ProfileCard from "../../../components/card/ProfileCard";
import AccountSideBar from "../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../components/common/ui/CustomBreadcrumbs";
import Link from "next/link";
import React from "react";

const PaymentsMethod = () => {
  return (
    <div className="wrapper mt-8   pb-16 ">
      <CustomBreadcrumbs
        links={[{ linkName: "My Account", link: "/voucher" }]}
      />
      {/* <!-- Side Bar --> */}
      <div className="gap-5 start">
        <div className="hidden lg:block">
          <AccountSideBar link="voucher" />
        </div>

        <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
          <div className=" w-full  gap-4  ">
            <ProfileCard />
            <h2 className=" font-bold mb-4 text-sm">Your Voucher</h2>

            <div className="flex  items-center  bg-white w-full ">
              <div className=" bg-white rounded-lg shadow-lg p-6 between  w-full">
              
                <div className="border-b-2 border-gray-200 py-4">
                  <h3 className="text-sm font-bold">Voucher Code:</h3>
                  <p className="text-gray-700">ABC123</p>
                </div>
                <div className="border-b-2 border-gray-200 py-4">
                  <h3 className="text-sm font-bold">Discount:</h3>
                  <p className="text-gray-700">20% off</p>
                </div>
                <div className="border-b-2 border-gray-200 py-4 md:block hidden">
                  <h3 className="text-sm font-bold ">Expiration Date:</h3>
                  <p className="text-gray-700">31 December 2024</p>
                </div>
                <div className="py-6">
                  <button className="bg-orangeRed text-white text-sm font-bold py-2 px-4 rounded-md">
                    Redeem Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsMethod;
