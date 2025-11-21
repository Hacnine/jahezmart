"use client";

import ProfileCard from "../../../../components/card/ProfileCard";
import Link from "next/link";
import React from "react";
import { useGetUserOrderQuery, useUpdateOrderMutation } from "../../../../store/api";
import { useParams } from "next/navigation";

const OrderDetails = () => {
  const params = useParams();
  const orderId = params.id;
  const { data: order, isLoading } = useGetUserOrderQuery(orderId);
  const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found</div>;
  }

  const handleReturnRequest = async () => {
    try {
      await updateOrder({
        id: orderId,
        status: 'return_requested'
      }).unwrap();
      alert('Return request submitted successfully');
    } catch (error) {
      alert('Failed to submit return request');
    }
  };

  return (
    <div className="md:ml-8 text-gray-600 text-base font-sans md:mt-20 w-full pb-16">
      <div className="gap-5 start">
        <div className="flex items-center lg:justify-between flex-col lg:flex-row w-full gap-6">
          <div className="w-full gap-4">
            <ProfileCard />

            {/* Order Details */}
            <div className="shadow-md shadow-gray-300 rounded px-4 p-5">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Order Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold">Order Number</h3>
                    <p>{order.orderNumber}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Status</h3>
                    <p className={`capitalize ${
                      order.status === 'delivered' ? 'text-green-600' :
                      order.status === 'shipped' ? 'text-blue-600' :
                      order.status === 'pending' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>{order.status}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Total Amount</h3>
                    <p>${order.total}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Date</h3>
                    <p>{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Items</h3>
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b py-4">
                      <img
                        src={item.image || "/images/products/product1.1.jpg"}
                        className="w-20 h-20 object-cover rounded"
                        alt={item.name}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-sm font-medium">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Address */}
                {order.shippingAddress && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
                    <div className="bg-gray-50 p-4 rounded">
                      <p>{order.shippingAddress.street}</p>
                      <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                      <p>{order.shippingAddress.country}</p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link href="/account/order/orderhistory">
                    <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                      Back to Orders
                    </button>
                  </Link>

                  {(order.status === 'delivered' || order.status === 'shipped') && order.status !== 'return_requested' && (
                    <button
                      onClick={handleReturnRequest}
                      disabled={isUpdating}
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
                    >
                      {isUpdating ? 'Processing...' : 'Request Return'}
                    </button>
                  )}

                  {order.status === 'return_requested' && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">
                      Return Requested
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;