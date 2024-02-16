import { Badge, BorderColor, Favorite, Logout, Payment } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const AccountSideBar = () => {
  return (
    <>
      {/* <!-- Account Profile --> */}
      <div className="px-4 py-3 bg-white shadow md:flex md:items-center gap-4 w-[200px] rounded-md">
        <div className="flex-shrink-0">
          <img src="/images/BeardManProfile.svg" className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"/>
        </div>

        <div className="flex-grow ">
          <p className="text-gray-800 font-medium">Abu Imadullah</p>
        </div>
      </div>
      {/* <!-- Account Profile End --> */}

      {/* <!-- Profile links --> */}
      <div className="bg-white w-fit col-start-1 mt-6  shadow-md rounded p-4 divide-y divide-gray-200 text-gray-600 space-y-4">
        <div className="space-y-1 pl-8 pt-3">
          <Link href="" className="relative text-orangeRed block font-medium capitalize transition">
            <span className="absolute -left-8 -top-1 text-base">
              <Badge/>
            </span>
            Manage account
          </Link>

          <Link href="" className=" hover:text-orangeRed block  capitalize transition">Profile info</Link>

          <Link href="" className=" hover:text-orangeRed block  capitalize transition">Manage Addresses</Link>

          <Link href="" className=" hover:text-orangeRed block  capitalize transition">Change Password</Link>

        </div>


        <div className="space-y-1 pl-8 pt-3">
          <Link href="" className="relative  block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <BorderColor/>
            </span>
             Order History
          </Link>

          <Link href="" className=" hover:text-orangeRed block  capitalize transition"> Returns</Link>

          <Link href="" className=" hover:text-orangeRed block  capitalize transition"> Cancelation</Link>

          <Link href="" className=" hover:text-orangeRed block  capitalize transition"> Reviews</Link>

        </div>


        <div className="space-y-1 pl-8 pt-3">
          <Link href="" className="relative block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <Payment/>
            </span>
            Payments Method
          </Link>
          <Link href="" className="relative hover:text-orangeRed block  capitalize transition">Voucher</Link>

        </div>

        <div className="space-y-1 pl-8 pt-3">
          <Link href="" className="relative block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <Favorite/>
            </span>
             Wish List
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-3">
          <Link href="" className="relative  block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <Logout/>
            </span>
            Log Out
          </Link>

        </div>

      </div>
    </>
  )
}

export default AccountSideBar
