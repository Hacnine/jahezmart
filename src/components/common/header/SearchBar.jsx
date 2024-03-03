"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronRight, Search } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

import SearchbarMiniProductCard from "../../card/SearchbarMiniProductCard";
import Scrollbars from "react-custom-scrollbars-2";
import { useRouter } from "next/navigation";
import { useFilterContext } from "../../../context_reducer/filterContext";

const SearchBar = ({ otherClasses }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const { allProducts, updateFilteredProducts, filteredProducts } =
    useFilterContext();

  const primaryFilteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleFilteredProducts = () => {
    if (query === "") {
      alert("Please fill in the search bar");
    } else {
      updateSearchParams(query.toLowerCase());

      updateFilteredProducts(primaryFilteredProducts);
      console.log(primaryFilteredProducts);
    }
  };

  const updateSearchParams = (query) => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryString = `?search=${query}`;
    router.push(`/shop${queryString}`);
  };

  return (
    <div className={`${otherClasses} w-[40%]   lg:block bg-transparent `}>
      <div className=" bg-transparent  lg:flex items-center justify-center  w-full ">
        <Combobox>
          <div className="relative w-full center">
            <Combobox.Input
              className={
                "w-full border  h-[48px] border-r-0 px-8 pb-1 ring-transparent outline-none focus:border focus:border-orangeRed focus:border-r-0 rounded-lr-full rounded-tl-full placeholder:text-sm  placeholder:font-sans"
              }
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products..."
            />
            {/* <Link href={'/shop'}> */}
            <Combobox.Button
              className="bg-orangeRed hover:bg-sandyBrown text-white center gap-1 py-3 pl-3 pr-10 rounded-lr-md rounded-br-full text-sm"
              onClick={handleFilteredProducts}
            >
              <Search fontSize="medium" />
              Search
            </Combobox.Button>
            {/* </Link> */}

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options
                className={
                  " w-full h-[400px] bg-slate-100 absolute top-20 rounded-md z-50 rounded-lr-md rounded-tl-3xl rounded-br-3xl p-4 overflow-clip"
                }
              >
                {primaryFilteredProducts.length === 0 && query !== "" ? (
                  <Combobox.Option value={query} className=" ">
                    No matching products found
                  </Combobox.Option>
                ) : (
                  <div>
                    <Combobox.Option
                      value={query}
                      className=" text-base font-bold "
                    >
                      <div className="mb-3 start gap-1">
                        {primaryFilteredProducts.length} Matching products
                        found.
                        <Link
                          className="center gap-3 text-lightOrange "
                          href={"/shop"}
                        >
                          <button>View all results</button>
                          <ChevronRight />
                        </Link>
                      </div>
                    </Combobox.Option>

                    <Scrollbars style={{ width: 600, height: 400 }}>
                      {primaryFilteredProducts.map((product) => (
                        <Combobox.Option
                          key={product.id}
                          className={({ active }) =>
                            `relative z-50  overflow-clip ${
                              active
                                ? "bg-primary-blue text-lightOrange "
                                : "text-gray-900"
                            } `
                          }
                          value={product.name}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate z-50 ${
                                  selected ? "font-medium" : "font-normal "
                                }`}
                              >
                                <SearchbarMiniProductCard {...product} />
                              </span>
                              {/* {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-prib g-primary-purple"
                                }`}
                              ></span>
                            ) : null} */}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Scrollbars>
                  </div>
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
      <div
        className={`${
          visible ? "true" : "hidden"
        } w-full h-[300px] bg-slate-100 absolute top-20 rounded-md z-50 rounded-lr-md rounded-tl-3xl rounded-br-3xl`}
        onClick={() => setVisible(false)}
      >
        <div className="px-7 pt-4">
          <p>Bismillah</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
