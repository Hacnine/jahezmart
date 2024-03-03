import ProfileCard from '@/components/card/ProfileCard';
import AccountSideBar from '@/components/common/sidebar/AccountSideBar';
import CustomBreadcrumbs from '@/components/common/ui/CustomBreadcrumbs';
import Link from 'next/link';
import React from 'react';

const OrderHistory = () => {
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
     <AccountSideBar link="orderhistory"/>
   </div>

  <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
  <div className=" w-full  gap-4  ">

   <ProfileCard/>
     <div className="  shadow-md shadow-gray-300 rounded  px-4 p-5  ">

     <div className="between text-sm ">
          <img src='/images/products/product1.1.jpg' className='w-36'/>
          <Link href={'/order-details'}>
          <button className="hover:bg-orangeRed text-gray-600 hover:text-white px-4 py-2 rounded-md border border-orangeRed font-semibold text-sm">View Order</button>
          </Link>
        </div>

     <div className="between bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4 ">
        <h2 className="text-sm font-bold">Order Number</h2>
        <p className="text-gray-700 text-sm">23E34RT3</p>
      </div>
      <div className="mb-4  md:block hidden ">
        <h2 className="text-sm font-bold">Purchased</h2>
        <p className="text-gray-700 text-sm">01 March 2021</p>
      </div>
      <div className="mb-4 hidden md:block font-bold">
        <h2 className="text-sm  ">Quantity</h2>
        <p className="text-gray-700">x3</p>
      </div>
      <div className="mb-4  center flex-col">
        <h2 className="text-sm font-bold">Total</h2>
        <p className="text-gray-700 text-sm">$120</p>
      </div>
      <div className="mb-4 center flex-col">
        <h2 className="text-sm font-bold">Status</h2>
        <p className={`${'bg-colorRed px-2'} text-white rounded-full text-sm`}>cancel</p>
      </div>
    </div>
   </div>

  
 </div>
 </div>
 </div>
 </div>

   
  );
};

export default OrderHistory;
