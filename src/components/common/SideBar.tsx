import { Badge, BorderColor, Favorite, Logout, Payment } from '@mui/icons-material'
import React from 'react'

const SideBar = () => {
  return (
    <>
      <div className="col-span-3">
      {/* <!-- Account Profile --> */}
      <div className="px-4 py-3 shadow md:flex md:items-center gap-4">
        <div className="flex-shirnk-0">
          <img src="/images/BeardManProfile.svg" className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"/>
        </div>

        <div className="flex-grow ">
          <p className="text-gray-800 font-medium">Abu Imadullah</p>
        </div>
      </div>
      {/* <!-- Account Profile End --> */}

      {/* <!-- Profile links --> */}
      <div className=" col-start-1 mt-6  shadow-md rounded p-4 divide-y divide-gray-200 text-gray-600 space-y-4">
        <div className="space-y-1 pl-8 pt-3">
          <a href="" className="relative text-orangeRed block font-medium capitalize transition">
            <span className="absolute -left-8 -top-1 text-base">
              <Badge/>
            </span>
            Manage account
          </a>

          <a href="" className=" hover:text-orangeRed block  capitalize transition">Profile info</a>

          <a href="" className=" hover:text-orangeRed block  capitalize transition">Manage Addresses</a>

          <a href="" className=" hover:text-orangeRed block  capitalize transition">Change Password</a>

        </div>


        <div className="space-y-1 pl-8 pt-3">
          <a href="" className="relative  block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <BorderColor/>
            </span>
             Order History
          </a>

          <a href="" className=" hover:text-orangeRed block  capitalize transition"> Returns</a>

          <a href="" className=" hover:text-orangeRed block  capitalize transition"> Cancelation</a>

          <a href="" className=" hover:text-orangeRed block  capitalize transition"> Reviews</a>

        </div>


        <div className="space-y-1 pl-8 pt-3">
          <a href="" className="relative block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <Payment/>
            </span>
            Payments Method
          </a>
          <a href="" className="relative hover:text-orangeRed block  capitalize transition">Voucher</a>

        </div>

        <div className="space-y-1 pl-8 pt-3">
          <a href="" className="relative block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <Favorite/>
            </span>
             Wish List
          </a>
        </div>

        <div className="space-y-1 pl-8 pt-3">
          <a href="" className="relative  block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <Logout/>
            </span>
            Log Out
          </a>

        </div>

      </div>
    </div>
    </>
  )
}

export default SideBar
