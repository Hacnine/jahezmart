"use client";
import AccountDrawer from "@/components/Drawer/DynamicDrawer";
import ShopSidebar from "@/components/common/sidebar/ShopSidebar";
import AllProducts from "@/components/common/ui/AllProducts";
import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
import { GridView, Menu, TableRows } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";

const Shop = () => {
  const [open, setOpen] = useState<boolean>(false);
  const links = [{ linkName: "Shop", link: "/shop" }];
  const [grid, setGrid] = useState(true);
  return (
    <>
      <div className="wrapper grid grid-cols-12 pb-12">
        <div className="col-span-12 mb-4 my-8 block lg:hidden">
          <div className="center">
            <img src="/images/titles/all.svg" className="w-[30%]" alt="" />
          </div>
        </div>

        <div className="col-span-3 mt-3 hidden lg:block ">

          <CustomBreadcrumbs links={links}/>
        </div>

        <div className="lg:ml-8 lg:col-start-4 col-start-1 col-end-12 mb-4 my-8 ">
          <div className="between">

          <IconButton className="block text-darkChocolate md:hidden" onClick={()=> setOpen(true)} >
        <Menu/>
        </IconButton>
            <select
              name=""
              id=""
              className="w-44 text-sm text-gray-600 border-gray-300 shadow-md rounded focus:ring-blue-600 focus:border-blue-600 px-4 py-3"
            >
              <option value="">Deafult sorting</option>
              <option value="">Price low-high</option>
              <option value="">Price high-low</option>
              <option value="">Latest product</option>
            </select>

            <img
              src="/images/titles/all.svg"
              className="hidden lg:block w-[40%]"
              alt=""
            />

            <div className="flex gap-1 ">
              <button
                className={`${
                  grid ? "bg-colorRed text-white" : "text-gray-600"
                }  rounded w-10 h-9  flex items-center justify-center cursor-pointer`}
                onClick={() => setGrid(true)}
              >
                <GridView />
              </button>
              <button
                className={`${
                  grid ? "text-gray-600" : "bg-colorRed text-white"
                }  rounded w-10 h-9  flex items-center justify-center cursor-pointer`}
                onClick={() => setGrid(false)}
              >
                <TableRows />
              </button>
            </div>
          </div>
        </div>
        {/* Slidebar */}
        <div className="hidden lg:block col-span-3 items-start shadow-lg shadow-slate-300 h-fit">
          {" "}
          <ShopSidebar />
        </div>

        <AllProducts grid={grid} />
        {/* Product */}

        {/* Shop Wrapper Ends */}

        <AccountDrawer open={open} setOpen={setOpen} Component={ShopSidebar}/>

      </div>
    </>
  );
};

export default Shop;
