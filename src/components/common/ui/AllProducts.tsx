"use client";
import { useFilterContext } from "@/context_reducer/filterContext";
import React, { Fragment, useState, useEffect } from "react";
import ProductCard from "../../card/ProductCard";


interface Props {
  grid: boolean;
}

const AllProducts: React.FC<Props> = ({ grid }) => {
  const { filteredProducts, updateFilteredProducts } = useFilterContext();

  if (filteredProducts.length === 0) {
    return (
      <div className="lg:col-span-9 col-span-12 ">
       <div className="center">
       <img src="/images/404.svg" alt="" />
       </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-9 col-span-12  ">
      {/* <div className="  w-full center flex-col"> */}

      <div
        className={` lg:ml-8  grid ${
          grid
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
    // </div>
  );
};

export default AllProducts;
