"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartContext } from "../../context_reducer/cartContext";
const SummaryCard = ({ children }) => {
  const { cartProducts } = useCartContext();

  const router = useRouter();

  const handleClick = () => {
    if (children === "Place Order") {
      router.push("/shop");
    } else if (children === "Checkout") {
      router.push("/account/cart/checkout");
    } else {
    }
  };
  return (
    <div className="w-[276px] space-y-4 col-span-4 shadow rounded ml-9 p-6 text-sm font-sans">
      <p className="text-gray-600 text-base font-semibold">ORDER SUMMARY</p>
          {cartProducts.map((product) => (
            <div className="between w-full">
              <p
                className="text-sm font-semibold text-gray-600 "
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  width: "7rem",
                }}
              >
                {product.name}
              </p>

              
              <div className="center gap-5">
                {" "}<span className="text-xs font-semibold text-gray-500">
                x{product.quantity}
              </span>
                <span className="text-xs text-orangeRed w-9">
                  <span className=" font-extrabold">৳</span>
                  {product.quantity * product.price}
                </span>
              </div>
            </div>
          ))}
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
      {/* <Link href=""> */}
      <button
        type="submit"
        className=" block text-center bg-orangeRed w-full rounded-md text-white h-10  ring-1 hover:bg-transparent hover:text-orangeRed ring-orangeRed mt-4"
        onClick={handleClick}
      >
        {children}
      </button>
      {/* </Link> */}
    </div>
  );
};

export default SummaryCard;
