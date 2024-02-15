import React from 'react'

const ShopSidebar = () => {
  return (
    <div className="hidden lg:block col-span-3 items-start">
    <div className=" shadow pt-2  px-3 pb-16 rounded">
      <div className="divide-y divide-gray-200 space-y-5">
        {/* Category Filter */}
        <div className="pt-4">
          <p className="text-lg text-gray-800 font-medium">CATEGORIES</p>
          <div className="flex justify-between pt-3">
            <form
              action=""
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="checkbox"
                className="text-orangeRed rounded focus:ring-0 cursor-pointer"
                id="cat-1"
              />
              <label className="text-gray-600">Bedroom</label>
            </form>
            <span className="text-gray-600 text-sm">(19)</span>
          </div>
          <div className="flex justify-between pt-3">
            <form
              action=""
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="checkbox"
                className="text-orangeRed rounded focus:ring-0 cursor-pointer"
                id="cat-1"
              />
              <label className="text-gray-600">Sofa</label>
            </form>
            <span className="text-gray-600 text-sm">(19)</span>
          </div>
          <div className="flex justify-between pt-3">
            <form
              action=""
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="checkbox"
                className="text-orangeRed rounded focus:ring-0 cursor-pointer"
                id="cat-1"
              />
              <label className="text-gray-600">Outdoor</label>
            </form>
            <span className="text-gray-600 text-sm">(9)</span>
          </div>
          <div className="flex justify-between pt-3">
            <form
              action=""
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="checkbox"
                className="text-orangeRed rounded focus:ring-0 cursor-pointer"
                id="cat-1"
              />
              <label className="text-gray-600">Dinning</label>
            </form>
            <span className="text-gray-600 text-sm">(56)</span>
          </div>
        </div>
        {/* Category Filter Ends */}
        {/* Brands Filter */}
        <div className="pt-4">
          <p className="text-lg text-gray-800 font-medium">BRANDS</p>
          <div className="flex justify-between pt-3">
            <form
              action=""
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="checkbox"
                className="text-orangeRed rounded focus:ring-0 cursor-pointer"
                id="cat-1"
              />
              <label className="text-gray-600">Dominik</label>
            </form>
            <span className="text-gray-600 text-sm">(19)</span>
          </div>
          <div className="flex justify-between pt-3">
            <form
              action=""
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="checkbox"
                className="text-orangeRed rounded focus:ring-0 cursor-pointer"
                id="cat-1"
              />
              <label className="text-gray-600">Karl</label>
            </form>
            <span className="text-gray-600 text-sm">(19)</span>
          </div>
          <div className="flex justify-between pt-3">
            <form
              action=""
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="checkbox"
                className="text-orangeRed rounded focus:ring-0 cursor-pointer"
                id="cat-1"
              />
              <label className="text-gray-600">Maxing</label>
            </form>
            <span className="text-gray-600 text-sm">(9)</span>
          </div>
          <div className="flex justify-between pt-3">
            <form
              action=""
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="checkbox"
                className="text-orangeRed rounded focus:ring-0 cursor-pointer"
                id="cat-1"
              />
              <label className="text-gray-600">Ernest</label>
            </form>
            <span className="text-gray-600 text-sm">(523)</span>
          </div>
        </div>
        {/* Brands Filter Ends */}
        {/* Price */}
        <div className="pt-4">
          <p className="text-xl text-gray-800 font-medium">PRICE</p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="min"
              className="w-full px-3 py-1 border-gray-300 focus:border-blue-800 rounded-md"
            />
            <span className="text-gray-500 px-3">-</span>
            <input
              type="text"
              placeholder="max"
              className="w-full px-3 py-1 border-gray-300 focus:border-blue-800 rounded-md"
            />
          </div>
        </div>
        {/* Price Ends */}
        {/* Size Filter */}
        <div className="pt-4">
          <p className="text-xl text-gray-800 font-medium">SIZE</p>
          <div className="flex items-center mt-4 gap-3">
            {/* Single Size */}
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-s" />
              <label
                htmlFor="size-s"
                className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-m" />
              <label
                htmlFor="size-m"
                className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-l" />
              <label
                htmlFor="size-l"
                className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xl" />
              <label
                htmlFor="size-xl"
                className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
              >
                XL
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-xs" />
              <label
                htmlFor="size-xs"
                className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer"
              >
                XS
              </label>
            </div>
            {/* Single Size Ends */}
          </div>
        </div>
        {/* Size Filter Ends */}
        {/* Color Filter */}
        <div className="pt-4 col-span-3">
          <p className="text-xl text-gray-800 font-medium ">COLOR</p>
          {/* Single Size */}
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
                style={{ backgroundColor: "green" }}
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
          {/* Single Size Ends */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ShopSidebar
