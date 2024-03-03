import ProfileCard from "@/components/card/ProfileCard";
import AccountSideBar from "@/components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
import Link from "next/link";
import React from "react";

const PaymentsMethod = () => {
  return (
    <div className="wrapper mt-8   pb-16 ">
      <CustomBreadcrumbs
        links={[{ linkName: "My Account", link: "/account" }]}
      />
      {/* <!-- Side Bar --> */}
      <div className="gap-5 start">
        <div className="hidden lg:block">
          <AccountSideBar link="payment" />
        </div>

        <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
          <div className=" w-full  gap-4  ">
            <ProfileCard />
            
              <div className="between bg-white rounded-lg shadow-lg p-2">
                <div className=" text-sm ">
                  <img src="/images/payment.svg" className="w-24" />
                </div>
                <div className="mb-4 center flex-col">
                  <h2 className="text-sm font-bold">Method</h2>
                  <p className="text-gray-700">Card</p>
                </div>
                <div className="mb-4  center flex-col">
                  <h2 className="text-sm font-bold">Last Four</h2>
                  <p className={`text-green-600`}>0022</p>
                </div>
                <div className="mb-4  center flex-col">
                  <h2 className="text-sm font-bold">Expires </h2>
                  <p className=" text-sm">01/22</p>

                </div>

                <div className="mb-4  items-center flex-col md:flex hidden">
                  <h2 className="text-sm font-bold">Default </h2>
                  <p className=" text-sm">Yes</p>

                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PaymentsMethod;
