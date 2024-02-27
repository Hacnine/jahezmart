import CustomCheckBox from "@/components/shop/CustomCheckBox";
import { useFilterContext } from "@/context_reducer/filterContext";
import React from "react";

const ShopSidebar = () => {
  const { allProducts, getCategoryAndProductQuantity } = useFilterContext();

  const uniqueColors = Array.from(
    new Set(allProducts.flatMap((product) => Object.keys(product.images)))
  );

  const newCategory = getCategoryAndProductQuantity("category");

  const brands = getCategoryAndProductQuantity("brand");

  return (
    <div className="mx-4 lg:mx-0   max-w-[310px] py-4">
      <div className="px-4 py-4 col-span-3 shadow-md shadow-gray-300 bg-white rounded-md">
        <p className="text-base text-gray-800 font-extrabold mb-2">
          CATEGORIES
        </p>
        {newCategory.map((item, index) => (
          <div className="between" key={index}>
            <CustomCheckBox label={item.category} />
            <span className="text-gray-600 text-sm">({item.count})</span>
          </div>
        ))}
      </div>

      {/* Category Filter Ends */}
      {/* Brands Filter */}
      <div className="mt-6 px-4 py-4 col-span-3 shadow-md shadow-gray-300 bg-white rounded-md">
        <p className="text-base text-gray-800 font-semibold mb-2">BRANDS</p>
        {brands.map((item, index) => (
          <div className="between" key={index}>
            <CustomCheckBox label={item.category} />
            <span className="text-gray-600 text-sm">({item.count})</span>
          </div>
        ))}
      </div>
      {/* Brands Filter Ends */}

      
      {/* Color Filter */}
      <div className="mt-6 px-4 py-4 col-span-3 shadow-md rounded-s-md shadow-gray-300 bg-white ">
        <p className="text-base font-semibold mb-4 text-gray-800  ">COLOR</p>
        {/* Single Size */}
        <div className="grid grid-cols-12 gap-2 ">
          {uniqueColors.map((property, index) => (
            <div key={index}>
              <div
                className={`${
                  property === "white" ? "border border-slate-300" : null
                } w-2 h-5 rounded cursor-pointer`}
                style={{
                  backgroundColor: property,
                  color: property,
                  boxShadow: "gray",
                }}
                key={index}
              />
            </div>
          ))}
        </div>
        {/* Single Size Ends */}
      </div>

      {/* Price */}
      <div className="mt-6 px-4 py-4 col-span-3 shadow-md shadow-gray-300 rounded-md bg-white">
        <p className="text-base font-semibold text-gray-800 ">PRICE</p>
        <div className="flex items-center mt-4 text-xs">
          <input
            type="text"
            placeholder="Min"
            className="w-full px-3 py-1  focus:bg-slate-100 rounded-md outline-none bg-slate-50"
          />
          <span className="text-gray-500 px-3">To</span>
          <input
            type="text"
            placeholder="Max"
            className="w-full px-3 py-1  focus:bg-slate-100 rounded-md outline-none bg-slate-50"
          />
          <button className="text-orangeRed ml-5 rounded bg-darkChocolate p-1 px-2">
            Apply
          </button>
        </div>
      </div>
      {/* Price Ends */}



    </div>
  );
};

export default ShopSidebar;
