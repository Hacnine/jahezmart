"use client";
import AccountDrawer from "../../components/Drawer/DynamicDrawer";
import FilterSidebar from "../../components/common/sidebar/FilterSidebar";
import AllProducts from "../../components/common/ui/AllProducts";
import CustomBreadcrumbs from "../../components/common/ui/CustomBreadcrumbs";
import { useFilterContext } from "../../context_reducer/filterContext";
import { GridView, Menu, TableRows } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import React, { useState } from "react";




const Shop = () => {
  const { sortingProduct } = useFilterContext();

  const [open, setOpen] = useState(false);
  const links = [{ linkName: "Shop", link: "/shop" }];
  const [grid, setGrid] = useState(true);
  return (
    <>
      <div className="wrapper grid grid-cols-12 pb-12">
       

        <div className="col-span-3 mt-3 hidden lg:block ">
          <CustomBreadcrumbs links={links} />
        </div>

        <div className="lg:ml-8 lg:col-start-4 col-start-1 col-end-12 mb-4 my-8 ">
          <div className="between">
            <IconButton
              className="block text-darkChocolate lg:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>
            <select
              name=""
              id=""
              className="w-44 text-sm text-gray-600 border-gray-300 rounded outline-none focus:ring-0 focus:border-transparent focus:ring-blue-600 focus:border-blue-600 px-4 py-3 border"
              onChange={(e) => sortingProduct(e.target.value)}
            >
              <option className="rounded" value="Default sorting">
                Default sorting
              </option>
              <option className="rounded" value="Price Low-High">
                Price low-high
              </option>
              <option className="rounded" value="Price High-Low">
                Price high-low
              </option>
              <option className="rounded" value="Latest product">
                Latest product
              </option>
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
        <div className="hidden lg:block col-span-3 items-start h-fit">
          {" "}
          <FilterSidebar />
        </div>

        <AllProducts grid={grid} />
        {/* Product */}

        {/* Shop Wrapper Ends */}

        <AccountDrawer
          open={open}
          setOpen={setOpen}
          Component={FilterSidebar}
        />
      </div>
    </>
  );
};

export default Shop;
