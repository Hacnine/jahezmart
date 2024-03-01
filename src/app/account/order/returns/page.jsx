import ProfileCard from "../../../../components/card/ProfileCard";
import AccountSideBar from "../../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../../components/common/ui/CustomBreadcrumbs";
import Link from "next/link";
import React from "react";

const Returns = () => {
  return (
    <div className="wrapper mt-8   pb-16 ">
      <CustomBreadcrumbs
        links={[{ linkName: "My Account", link: "/account" }]}
      />
      {/* <!-- Side Bar --> */}
      <div className="gap-5 start">
        <div className="hidden lg:block">
          <AccountSideBar link="returns" />
        </div>

        <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
          <div className=" w-full  gap-4  ">
            <ProfileCard />
            <div className="  shadow-md shadow-gray-300 rounded  px-4 p-5  ">
              <div className="between bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-1 text-sm ">
                  <img src="/images/products/product1.1.jpg" className="w-36" />

                  <div className="mb-4  center flex-col">
                  <h2 className="text-sm font-bold">Product Name</h2>
                  <p className=" text-sm">20</p>

                </div>
                </div>
                <div className="mb-4  md:block hidden">
                  <h2 className="text-sm font-bold">Order Number</h2>
                  <p className="text-gray-700 text-sm">23E34RT3</p>
                </div>
                <div className="mb-4  center flex-col">
                  <h2 className="text-sm font-bold">Return Status</h2>
                  <p className={`text-green-600 text-sm`}>Success</p>
                </div>
                

                <Link href={"/order-details"}>
                  <button className="hover:bg-orangeRed text-gray-600 hover:text-white px-4 py-2 rounded-md border border-orangeRed font-semibold text-sm md:block hidden">
                    View Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
