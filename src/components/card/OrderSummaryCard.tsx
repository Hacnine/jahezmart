import React from "react";
import Link from "next/link";
const SummaryCard = () => {
  return (
    <div className="w-[276px] space-y-4 col-span-4 shadow rounded ml-9 p-6">
      <p className="text-gray-600 text-lg text font-semibold">ORDER SUMMARY</p>
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-gray-600 text-base">Lorem Product</p>
          <p className="text-gray-500 text-sm">Size M</p>
        </div>
        <span className="font-sm text-gray-500">x3</span>
        <span className="font-semibold text-gray-600">$560</span>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-gray-600 text-base">Shipping</p>
        <span className="font-semibold text-gray-600">$40</span>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-gray-600 text-base">Total</p>
        <span className="font-semibold text-gray-600">$600</span>
      </div>
      <div className="flex items-center justify-start mt-6 space-x-2 ">
        <input
          type="checkbox"
          name="checkbox"
          className="text-orangeRed rounded focus:ring-0 cursor-pointer"
          id="cat-1"
        />
        <label className="text-gray-600 pl-2">
          Agree to our{" "}
          <span className="text-orangeRed">terms and conditions</span>
        </label>
      </div>
      <Link href={"/account/cart/checkout"}>
        <button
          type="submit"
          className=" block text-center bg-orangeRed w-full rounded-md text-white h-10  ring-1 hover:bg-transparent hover:text-orangeRed ring-orangeRed mt-4"
        >
          Place Order
        </button>
      </Link>
    </div>
  );
};

export default SummaryCard;
