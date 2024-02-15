import React from "react";

const Page = () => {
  return (
    <>
      <div>
        {/* <!-- Product View --> */}
        <div className="container grid grid-cols-2">
          <div className="col-span-1">
            <img src="/images/products/product7.jpg" alt="" />

            {/* <!-- Mini Product Slide --> */}
            <div className="grid grid-cols-5 items-center jusitify-between mt-3 gap-3 mb-6">
              <img
                src="/images/products/product7.jpg"
                alt=""
                className="border border-1 border-orangeRed w-full h-full object-cover transform transition-transform hover:scale-110 hover:border-orangeRed"
              />
              <img
                src="/images/products/product2.jpg"
                className=" w-full h-full object-cover transform transition-transform hover:scale-110 border border-1 hover:border-orangeRed"
                alt=""
              />
              <img
                src="/images/products/product3.jpg"
                className=" w-full h-full object-cover transform transition-transform hover:scale-110 hover:border-orangeRed border border-1"
                alt=""
              />
              <img
                src="/images/products/product4.jpg"
                className=" w-full h-full object-cover transform transition-transform hover:scale-110 hover:border-orangeRed border border-1"
                alt=""
              />
              <img
                src="/images/products/product5.jpg"
                className=" w-full h-full object-cover transform transition-transform hover:scale-110 hover:border-orangeRed border border-1"
                alt=""
              />
            </div>
            {/* <!-- Mini Product Slide Ends--> */}

            {/* <!-- Product Description --> */}
            <div className="mt-5 mb-6  text-sm space-y-3">
              <p className="text-2xl text-gray-800">Product Description</p>
              <hr className="border-t border-gray-400 " />
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                aperiam odio veniam itaque culpa fugit ratione debitis!
                Laboriosam sint aperiam commodi ratione magni nostrum. At fuga
                mollitia dolorem sint soluta. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Illum ab consectetur, ullam
                doloribus eveniet minus id voluptate animi consequuntur voluptas
                totam earum natus, cum at odio explicabo minima fuga aspernatur.
              </p>
            </div>

            {/* <!-- Table --> */}
            <div className="mb-6">
              <table className="table-auto text-left text-gray-600 text-sm mt-6 border-collapse border  w-full   ">
                <tr className="space-y-2">
                  <th className=" py-2 px-3   font-medium w-40 border border-slate-300 pl-3 ">
                    Color
                  </th>
                  <td className="py-2 px-3 border border-slate-300 pl-3">
                    Black, Brown
                  </td>
                </tr>
                <tr className="space-y-2">
                  <th className=" py-2 px-3   font-medium w-40 border border-slate-300 pl-3 ">
                    Color
                  </th>
                  <td className="py-2 px-3 border border-slate-300 pl-3">
                    Black, Brown
                  </td>
                </tr>
                <tr className="space-y-2">
                  <th className=" py-2 px-3   font-medium w-40 border border-slate-300 pl-3 ">
                    Color
                  </th>
                  <td className="py-2 px-3 border border-slate-300 pl-3">
                    Black, Brown
                  </td>
                </tr>
              </table>
            </div>
            {/* <!-- Table Ends--> */}
          </div>

          {/* <!-- Product Description End--> */}

          {/* <!-- Product Name Rating Size Etc --> */}
          <div className="col-span-1 ml-4">
            <h1 className="text-3xl font-semibold text-gray-600">Easy Chair</h1>
            <div className="mt-2 mb-2">
              <div>
                <span className="text-yellow-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-yellow-300">
                  <i className="fas fa-star"></i>
                </span>
                <span className="ml-3 text-gray-400 text-sm">(34 Reviews)</span>
              </div>

              <div className="mt-2 mb-2  font-semibold  text-base">
                <span className="text-gray-600">Availablity:</span>
                <span className="text-green-600 ml-2">In Stock</span>
              </div>

              <div className="mt-2 mb-2  ">
                <span className="text-gray-600 font-semibold">Brand:</span>
                <span className=" text-sm ml-2 text-gray-600 ">Lorem</span>
              </div>

              <div className="mt-2 mb-2 ">
                <span className="text-gray-600 font-semibold">Category:</span>
                <span className=" text-sm ml-2 text-gray-600 ">Chair</span>
              </div>

              <div className="mt-2 mb-2 ">
                <span className="text-gray-600 font-semibold">SKU:</span>
                <span className=" text-sm ml-2 text-gray-600 ">Lorem</span>
              </div>

              <div className="mt-2 mb-2 font-roboto space-x-2 ">
                <span className="text-orangeRed font-semibold">$450.00</span>
                <span className=" text-sm  text-gray-600 line-through ">
                  500.00{" "}
                </span>
              </div>

              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                unde odio quasi similique neque autem atque totam doloribus.
              </p>

              <div className="pt-4">
                <p className="text-gray-600 font-semibold ">Size</p>
                <div className="flex items-center mt-4 gap-3">
                  {/* <!-- Single Size --> */}
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-s"
                    />
                    <label
                      htmlFor="size-s"
                      className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
                    >
                      S
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-m"
                    />
                    <label
                      htmlFor="size-m"
                      className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
                    >
                      M
                    </label>
                  </div>

                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-l"
                    />
                    <label
                      htmlFor="size-l"
                      className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
                    >
                      L
                    </label>
                  </div>

                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xl"
                    />
                    <label
                      htmlFor="size-xl"
                      className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
                    >
                      XL
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-xs"
                    />
                    <label
                      htmlFor="size-xs"
                      className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
                    >
                      XS
                    </label>
                  </div>
                  {/* <!-- Single Size Ends --> */}
                </div>
              </div>
              {/* <!-- Size Section Ends --> */}

              {/* <!-- Color Filter --> */}
              <div className="pt-4">
                <p className="text-gray-600 font-semibold">Color</p>

                {/* <!-- Single Size --> */}
                <div className="flex  items-center gap-3 mt-4">
                  <div className="color-selector">
                    <input type="radio" className="hidden" id="pink" />
                    <label
                      htmlFor="pink"
                      className=" flex justify-center h-6 w-6 rounded-full cursor-pointer"
                      style={{ backgroundColor: "pink" }}
                    ></label>
                  </div>

                  <div className="color-selector">
                    <input type="radio" className="hidden" id="red" />
                    <label
                      htmlFor="red"
                      className=" flex justify-center h-6 w-6 rounded-full cursor-pointer"
                      style={{ backgroundColor: "red" }}
                    ></label>
                  </div>

                  <div className="color-selector">
                    <input type="radio" className="hidden" id="yellow" />
                    <label
                      htmlFor="yellow"
                      className=" flex justify-center h-6 w-6 rounded-full cursor-pointer"
                      style={{ backgroundColor: "yellow" }}
                    ></label>
                  </div>

                  <div className="color-selector">
                    <input type="radio" className="hidden" id="green" />
                    <label
                      htmlFor="green"
                      className=" flex justify-center h-6 w-6 rounded-full cursor-pointer"
                      style={{ backgroundColor: "yellowgreen" }}
                    ></label>
                  </div>

                  <div className="color-selector">
                    <input type="radio" className="hidden" id="yellowgreen" />
                    <label
                      htmlFor="yellowgreen"
                      className=" flex justify-center h-6 w-6 rounded-full cursor-pointer"
                      style={{ backgroundColor: "yellowgreen" }}
                    ></label>
                  </div>
                </div>
                {/* <!-- Single Size Ends --> */}
              </div>

              {/* <!-- Increase Decrease Quantity --> */}
              <div className="flex items-center text-gray-600 font-semibold border border-b border-gray-500 divide-x divide-gray-500 w-max mt-5 mb-5">
                <div className="text-xl h-8 w-8 flex items-center justify-center cursor-pointer">
                  -
                </div>
                <div className=" h-8 w-8 flex items-center justify-center cursor-pointer">
                  2
                </div>
                <div className="text-xl h-8 w-8 flex items-center justify-center cursor-pointer">
                  +
                </div>
              </div>
              {/* <!-- End Increase Decrease Quantity --> */}

              {/* <!-- Button --> */}
              <div className="font-roboto gap-4 flex items-center pb-5 mt-6 ">
                <div className="text-white">
                  <a
                    href=""
                    className="bg-orangeRed flex items-center justify-center w-48 h-10 gap-4  border border-b border-orangeRed rounded"
                  >
                    <i className="fas fa-shopping-bag"></i>ADD TO CART
                  </a>
                </div>

                <div className="text-gray-600 border border-b border-gray-600 rounded">
                  <a
                    href=""
                    className=" flex items-center justify-center w-48 h-10 gap-4 rounded"
                  >
                    <i className="fas fa-shopping-bag"></i>WISH LIST
                  </a>
                </div>
              </div>

              <hr className="border-t border-gray-400 " />
              <div className="mt-5 mb-6 flex items-center gap-2 text-gray-600">
                <div className=" w-8 h-8 border border-gray-600  flex justify-center items-center rounded-full">
                  <a href="" className="0 ">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>

                <div className=" w-8 h-8 border border-gray-600  flex justify-center items-center rounded-full">
                  <a href="" className="0 ">
                    <a href="">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </a>
                </div>

                <div className=" w-8 h-8 border border-gray-600  flex justify-center items-center rounded-full">
                  <a href="" className="0 ">
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Product Name Rating Size Etc --> */}
        </div>
        {/* <!-- Product View end --> */}

        <div className="container">
          <div className=" ">
            <h1 className="text-xl text-gray-800">Related Products</h1>
          </div>
          {/* <!-- Releted Product --> */}
          <div className=" grid grid-cols-5 mb-6 gap-4">
            <div className="flex justify-center items-center relative group">
              <div className="space-y-2 ml-2">
                <img src="/images/products/product2.jpg" alt="" />

                <p className="font-semibold text-gray-600 text-50">
                  Lorem Name
                </p>
                <div>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-3 text-gray-400 text-sm">
                    (34 Reviews)
                  </span>
                </div>
                <div className="mt-2 mb-2 font-roboto space-x-2 ">
                  <span className="text-orangeRed font-semibold">$450.00</span>
                  <span className=" text-sm  text-gray-600 line-through ">
                    500.00{" "}
                  </span>
                </div>

                <div className="text-white">
                  <a
                    href=""
                    className="bg-orangeRed flex items-center justify-center w-full h-10 gap-4  border border-b border-orangeRed rounded"
                  >
                    <i className="fas fa-shopping-bag"></i>ADD TO CART
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center relative group">
              <div className="space-y-2 ml-2">
                <img src="/images/products/product2.jpg" alt="" />

                <p className="font-semibold text-gray-600 text-50">
                  Lorem Name
                </p>
                <div>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-3 text-gray-400 text-sm">
                    (34 Reviews)
                  </span>
                </div>
                <div className="mt-2 mb-2 font-roboto space-x-2 ">
                  <span className="text-orangeRed font-semibold">$450.00</span>
                  <span className=" text-sm  text-gray-600 line-through ">
                    500.00{" "}
                  </span>
                </div>

                <div className="text-white">
                  <a
                    href=""
                    className="bg-orangeRed flex items-center justify-center w-full h-10 gap-4  border border-b border-orangeRed rounded"
                  >
                    <i className="fas fa-shopping-bag"></i>ADD TO CART
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center relative group">
              <div className="space-y-2 ml-2">
                <img src="/images/products/product2.jpg" alt="" />

                <p className="font-semibold text-gray-600 text-50">
                  Lorem Name
                </p>
                <div>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-3 text-gray-400 text-sm">
                    (34 Reviews)
                  </span>
                </div>
                <div className="mt-2 mb-2 font-roboto space-x-2 ">
                  <span className="text-orangeRed font-semibold">$450.00</span>
                  <span className=" text-sm  text-gray-600 line-through ">
                    500.00{" "}
                  </span>
                </div>

                <div className="text-white">
                  <a
                    href=""
                    className="bg-orangeRed flex items-center justify-center w-full h-10 gap-4  border border-b border-orangeRed rounded"
                  >
                    <i className="fas fa-shopping-bag"></i>ADD TO CART
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center relative group">
              <div className="space-y-2 ml-2">
                <img src="/images/products/product2.jpg" alt="" />

                <p className="font-semibold text-gray-600 text-50">
                  Lorem Name
                </p>
                <div>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-3 text-gray-400 text-sm">
                    (34 Reviews)
                  </span>
                </div>
                <div className="mt-2 mb-2 font-roboto space-x-2 ">
                  <span className="text-orangeRed font-semibold">$450.00</span>
                  <span className=" text-sm  text-gray-600 line-through ">
                    500.00{" "}
                  </span>
                </div>

                <div className="text-white">
                  <a
                    href=""
                    className="bg-orangeRed flex items-center justify-center w-full h-10 gap-4  border border-b border-orangeRed rounded"
                  >
                    <i className="fas fa-shopping-bag"></i>ADD TO CART
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center relative group">
              <div className="space-y-2 ml-2">
                <img src="/images/products/product2.jpg" alt="" />

                <p className="font-semibold text-gray-600 text-50">
                  Lorem Name
                </p>
                <div>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="ml-3 text-gray-400 text-sm">
                    (34 Reviews)
                  </span>
                </div>
                <div className="mt-2 mb-2 font-roboto space-x-2 ">
                  <span className="text-orangeRed font-semibold">$450.00</span>
                  <span className=" text-sm  text-gray-600 line-through ">
                    500.00{" "}
                  </span>
                </div>

                <div className="text-white">
                  <a
                    href=""
                    className="bg-orangeRed flex items-center justify-center w-full h-10 gap-4  border border-b border-orangeRed rounded"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
