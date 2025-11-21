"use client";

import ProfileCard from "../../../../components/card/ProfileCard";
import AccountSideBar from "../../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../../components/common/ui/CustomBreadcrumbs";
import Link from "next/link";
import React from "react";
import { useGetUserOrdersQuery } from "../../../../store/api";

const Returns = () => {
  const { data: orders, isLoading } = useGetUserOrdersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Filter orders that can be returned (delivered or shipped)
  const returnableOrders = orders?.filter(order => 
    order.status === 'delivered' || order.status === 'shipped'
  ) || [];

  return (
    <div className="md:ml-8 text-gray-600 text-base font-sans  md:mt-20 w-full pb-16  ">
      <div className="gap-5 start">
        <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
          <div className=" w-full  gap-4  ">
            <ProfileCard />
            {returnableOrders.map((order) => (
              <div key={order.id} className="  shadow-md shadow-gray-300 rounded  px-4 p-5  ">
                <div className="between bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-1 text-sm ">
                    <img src={order.items[0]?.image || "/images/products/product1.1.jpg"} className="w-36" />

                    <div className="mb-4  center flex-col">
                    <h2 className="text-sm font-bold">Product Name</h2>
                    <p className=" text-sm">{order.items[0]?.name || 'Product'}</p>
                  </div>
                  </div>
                  <div className="mb-4  md:block hidden">
                    <h2 className="text-sm font-bold">Order Number</h2>
                    <p className="text-gray-700 text-sm">{order.orderNumber}</p>
                  </div>
                  <div className="mb-4  center flex-col">
                    <h2 className="text-sm font-bold">Return Status</h2>
                    <p className={`text-blue-600 text-sm`}>Available for return</p>
                  </div>
                  
                  <Link href={`/account/order/${order.id}`}>
                    <button className="hover:bg-orangeRed text-gray-600 hover:text-white px-4 py-2 rounded-md border border-orangeRed font-semibold text-sm md:block hidden">
                      Request Return
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            {returnableOrders.length === 0 && (
              <div className="text-center py-8">
                <p>No orders available for return.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
