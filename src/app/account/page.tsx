import SideBar from '@/components/common/SideBar'
import React from 'react'

const page = () => {
  return (
    <div>
  <div className="container py-4 flex items-center gap-3">

    <a href="index.html" className="text-[] text-base"><i className="fas fa-home"></i></a>
    <span className="fas fa-chevron-right"></span>

    <p className="text-gray-600 font-medium"> Account</p>
  </div>

  <div className="container grid grid-cols-12 items-start gap-6 pb-16">
    {/* <!-- Side Bar --> */}
    <SideBar/>

    <div className=" col-span-3 gap-4 shadow ">
      <div className=" shadow-md rounded  px-4 pb-8 pt-6">
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-gray-800 ">Profile</p>
          <p className="text-[#ff0000]">Edit</p>
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
          <p className="text-[#ff0000]">Edit</p>
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
          <p className="text-[#ff0000]">Edit</p>
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
  )
}

export default page
