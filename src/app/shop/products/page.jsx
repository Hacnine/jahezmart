"use client";

import React, { useState } from "react";
import ProductCard from "../../../components/card/ProductCard";
import { useFilterContext } from "../../../context_reducer/filterContext";
import { GridView, Menu, TableRows } from "@mui/icons-material";
const page = () => {
  const [grid, setGrid] = useState(true);

  const { filteredProducts } = useFilterContext();

  return (
    <>
      <div className="lg:col-start-4 col-span-full  mb-4 my-10 w-full  ">
        <div className="between mb-10">
          <button
            className=" text-darkChocolate md:hidden block"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
          <select
            name=""
            id=""
            className=" font-semibold w-fit text-sm text-gray-600 border-gray-300 rounded outline-none focus:ring-0 focus:border-transparent focus:ring-blue-600 focus:border-blue-600 px-4 py-3 border"
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
            className="hidden lg:block w-[240px]"
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

        <div
          className={`grid ${grid
              ? "lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2"
              : "grid-cols-1"
          } gap-6`}
        >
          {filteredProducts.map((product, index) => (
            <div key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
