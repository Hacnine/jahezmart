import React from "react";

const WishListSummaryCard = () => {
  return (
    <div className="w-[276px] space-y-4 col-span-4 shadow rounded ml-9 p-6 ext-base font-sans">
      <p className="text-gray-600 text-base text font-semibold">
        WISHLIST SUMMARY
      </p>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-gray-600 text-sm">Lorem Product</p>
          <p className="text-gray-500 text-sm">Size M</p>
        </div>
        <span className="font-sm text-gray-500">x3</span>
        <span className="font-semibold text-gray-600">$560</span>
      </div>

      <button
        type="submit"
        className=" block text-center bg-orangeRed w-full rounded-md text-white h-10  ring-1 hover:bg-transparent hover:text-orangeRed ring-orangeRed mt-4"
      >
        Move To Cart
      </button>
    </div>
  );
};

export default WishListSummaryCard;
