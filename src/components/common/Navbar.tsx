import React from 'react'
import AllCategories from './AllCategories'
import { Menu } from '@mui/icons-material'

const Navbar = () => {
  return (
    <nav className=" bg-tan">
    <div className="container flex ">
      <div className="px-8 py-4 bg-chocolate hover:bg-sandyBrown flex items center cursor-pointer relative group">
        <span className="text-white">
          <i className="fa-solid fa-bars"></i>
        </span>

        <span className="text-white capitalize ml-2 center gap-1"><Menu/> All Categories</span>
       <AllCategories/>
      </div>
      <div className="flex items-center justify-between flex-grow pl-12 text-white">
        <div className="flex items-center  flex-grow space-x-6 capitalize ">
          <a href="" className="">Home</a>
          <a href="shop.html" className="">Shop</a>
          <a href="about.html" className="">About us</a>
          <a href="contact.html" className="">Contact us</a>
        </div>

      </div>

      <div className="text-white  pt-4">
        <a href="http://127.0.0.1:5500/dist/login.html">Login/Logout</a>
      </div>
    </div>

  </nav>
  )
}

export default Navbar
