"use client";
import { useSearchParams } from "next/navigation";
import AccountDrawer from "../../components/Drawer/DynamicDrawer";
import FilterSidebar from "../../components/common/sidebar/FilterSidebar";
import AllProducts from "../../components/common/ui/AllProducts";
import CustomBreadcrumbs from "../../components/common/ui/CustomBreadcrumbs";
import { useSelector, useDispatch } from "react-redux";
import { sortingProduct } from "../../store/slices/filterSlice";
import { useGetProductsQuery } from "../../store/productsApi";
import { setApiData } from "../../store/slices/filterSlice";
import { GridView, Menu, TableRows } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/card/ProductCard";
import PaginationControls from "../../components/shop/PaginationControls";

// export const generateMetadata = ({params}) =>{
//   return {
//     title:`Product ${params.productId}`
//   };
// }

const Shop = ({ searchParams }) => {
  const dispatch = useDispatch();
  const { data: productsData, isLoading } = useGetProductsQuery({ limit: 1000 });
  const { allProducts, filteredProducts } = useSelector((state) => state.filter);

  useEffect(() => {
    if (productsData?.items) {
      dispatch(setApiData(productsData.items));
    }
  }, [productsData, dispatch]);

  const [open, setOpen] = useState(false);
  const [grid, setGrid] = useState(true);
  const page = searchParams["page"] ?? "1";
  let perPage = 9;

  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  const entries = filteredProducts.slice(start, end);
 
  // const searchParams = useSearchParams();

  // let primaryFilteredProducts;
  // const handleSearch = (searchValue) => (event) => {
  //   // Your logic here
  //   if (searchValue) {
  //     console.log(`Search value: ${searchValue}`);
  //     primaryFilteredProducts = allProducts.filter((product) =>
  //       product.name.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //   }
  // };
  // const searchValue = searchParams.get("search");
  // const handleSearchForSingle = handleSearch(searchValue);

  // Later, when an event occurs (e.g., button click):
  // Pass the event to the curried function without causing infinite loops
  // handleSearchForSingle(event);
  // console.log(primaryFilteredProducts);
  return (
    <main className="wrapper grid grid-cols-12 pb-12">
      <section className="col-span-3 mt-3 hidden lg:block ">
        <CustomBreadcrumbs />
      </section>

      <section className="lg:ml-8 lg:col-start-4 col-start-1 col-end-12 mb-4 my-8 ">
        <div className="between">
          <button
            className=" text-darkChocolate lg:hidden block"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
          <select
            name=""
            id=""
            className=" font-semibold w-fit text-sm text-gray-600 border-gray-300 rounded outline-none focus:ring-0 focus:border-transparent focus:ring-blue-600 focus:border-blue-600 px-4 py-3 border"
            onChange={(e) => dispatch(sortingProduct(e.target.value))}
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
            className="hidden lg:block w-[200px]"
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
      </section>
      {/* Slidebar */}
      <section className="hidden lg:block col-span-3 items-start h-fit">
        {" "}
        <FilterSidebar />
      </section>

      <section className="lg:col-span-9 col-span-12 mt-3 ">
        <div
          className={` lg:ml-8  grid ${
            grid
              ? "lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2"
              : "grid-cols-1"
          } gap-6`}
        >
          {entries.map((product, index) => (
            <div key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <div className=" center w-full  mt-6">
          <PaginationControls
            hasNextPage={end < filteredProducts.length}
            hasPrevPage={start > 0}
            currentPage={1}
            totalPages={5}
          />
        </div>
      </section>

      {/* <AllProducts grid={grid} /> */}
      {/* Product */}

      {/* Shop Wrapper Ends */}

      <AccountDrawer open={open} setOpen={setOpen} Component={FilterSidebar} />
    </main>
  );
};

export default Shop;
