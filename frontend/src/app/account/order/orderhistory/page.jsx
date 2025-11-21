"use client";

import ProfileCard from "../../../../components/card/ProfileCard";
import AccountSideBar from "../../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../../components/common/ui/CustomBreadcrumbs";
import Link from "next/link";
import React from "react";
import { useGetUserOrdersQuery } from "../../../../store/api";

const OrderHistory = () => {
  const { data: orders, isLoading } = useGetUserOrdersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:ml-8 text-gray-600 text-base font-sans  md:mt-20 w-full pb-16 ">
      <div className="gap-5 start">
        <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
          <div className=" w-full  gap-4  ">
            <ProfileCard />
            {orders?.map((order) => (
              <div key={order.id} className="  shadow-md shadow-gray-300 rounded  px-4 p-5  ">
                <div className="between text-sm ">
                  <img src={order.items[0]?.image || "/images/products/product1.1.jpg"} className="w-36" />
                  <Link href={`/account/order/${order.id}`}>
                    <button className="hover:bg-orangeRed text-gray-600 hover:text-white px-4 py-2 rounded-md border border-orangeRed font-semibold text-sm">
                      View Order
                    </button>
                  </Link>
                </div>

                <div className="between bg-white rounded-lg shadow-lg p-6">
                  <div className="mb-4 ">
                    <h2 className="text-sm font-bold">Order Number</h2>
                    <p className="text-gray-700 text-sm">{order.orderNumber}</p>
                  </div>
                  <div className="mb-4  md:block hidden ">
                    <h2 className="text-sm font-bold">Purchased</h2>
                    <p className="text-gray-700 text-sm">{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="mb-4 hidden md:block font-bold">
                    <h2 className="text-sm  ">Quantity</h2>
                    <p className="text-gray-700">{order.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
                  </div>
                  <div className="mb-4  center flex-col">
                    <h2 className="text-sm font-bold">Total</h2>
                    <p className="text-gray-700 text-sm">${order.total}</p>
                  </div>
                  <div className="mb-4 center flex-col">
                    <h2 className="text-sm font-bold">Status</h2>
                    <p
                      className={`${
                        order.status === 'delivered' ? 'bg-green-500' :
                        order.status === 'cancelled' ? 'bg-red-500' :
                        'bg-yellow-500'
                      } text-white rounded-full text-sm px-2`}
                    >
                      {order.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {(!orders || orders.length === 0) && (
              <div className="text-center py-8">
                <p>No orders found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
