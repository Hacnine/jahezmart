"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFilterContext } from "@/context_reducer/filterContext";
import StarRating from "@/components/common/ui/StarRating";
import ColorButton from "@/components/buttons/ColorButton";
import Link from "next/link";
import { Facebook, FavoriteBorder, Instagram, Twitter } from "@mui/icons-material";
import { BsInstagram } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa6";
const Page = ({ params }: { params: { id: string } }) => {
  const { allProducts, getProductById } = useFilterContext();
  const product = getProductById(params.id);
  const {
    brand,
    category,
    colors,
    description,
    discount,
    featured,
    full_details,
    id,
    images,
    name,
    price,
    quantity,
    rating,
    recommended,
    reviews,
    stock,
  } = product;
  console.log(description);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string>(colors[0]);
  const [temporaryQuantity, setTemporaryQuantity] =
    React.useState<number>(quantity);
  const setDecrease = () => {
    if (temporaryQuantity > 1) {
      setTemporaryQuantity(temporaryQuantity - 1);
      // updateCartItemQuantity(id, temporaryQuantity - 1);
    } else {
      setTemporaryQuantity(1);
      // updateCartItemQuantity(id, temporaryQuantity)
    }
  };

  const setIncrease = () => {
    if (temporaryQuantity < stock) {
      setTemporaryQuantity(temporaryQuantity + 1);
      // updateCartItemQuantity(id, temporaryQuantity + 1);
    }
    temporaryQuantity < stock
      ? setTemporaryQuantity(temporaryQuantity + 1)
      : setTemporaryQuantity(stock);
  };
  // console.log(product);

  return (
    <>
      <div>
        {/* <!-- Product View --> */}
        <div className="container grid grid-cols-2">
          <div className="col-span-1">
            <img src="/images/products/product7.jpg" alt="" />

            {/* <!-- Mini Product Slide --> */}
            <div className="grid grid-cols-5 items-center justify-between mt-3 gap-3 mb-6">
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
              <p className="text-2xl text-gray-800 font-bold">Product Description</p>
              <hr className="border-t border-gray-400 " />

              {description.map((description: string) => (
                <>
                  <p className="text-gray-600 text-base font-semibold">{description.title}</p>

                  <p className="text-gray-600">{description.description}</p>
                </>
              ))}
            </div>

            {/* <!-- Table --> */}
            {/* <div className="mb-6">
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
            </div> */}
            {/* <!-- Table Ends--> */}
          </div>

          {/* <!-- Product Description End--> */}

          {/* <!-- Product Name Rating Size Etc --> */}
          <div className="col-span-1 ml-4">
            <h1 className="text-3xl font-semibold text-gray-600">{name}</h1>
            <div className="mt-2 mb-2">
              <div className="start">
                <StarRating rating={rating} reviews={reviews} />
                <span className="ml-3 text-gray-400 text-sm">
                  ({reviews} Reviews)
                </span>
              </div>

              <div className="mt-2 mb-2  font-semibold  text-base">
                <span className="text-gray-600">Availablity:</span>
                <span className="text-green-600 ml-2">{stock} In Stock</span>
              </div>

              <div className="mt-2 mb-2  ">
                <span className="text-gray-600 font-semibold">Brand:</span>
                <span className=" text-sm ml-2 text-gray-600 ">{brand}</span>
              </div>

              <div className="mt-2 mb-2 ">
                <span className="text-gray-600 font-semibold">Category:</span>
                <span className=" text-sm ml-2 text-gray-600 ">{category}</span>
              </div>

              <div className="mt-2  font-roboto space-x-2 ">
                <span className="text-sm text-orangeRed font-semibold">
                  {" "}
                  <span className=" font-extrabold">৳</span>
                  {price}
                </span>
                <span className=" text-sm  text-gray-600 line-through ">
                  {price - 200}
                </span>
              </div>

              {/* <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                unde odio quasi similique neque autem atque totam doloribus.
              </p> */}

              <div className="pt-2">
                <p className="text-gray-600 font-semibold ">Size</p>
                <div className="flex items-center mt-2 gap-3">
                  {/* <!-- Single Size --> */}

                  <button className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer">
                    S
                  </button>
                  <button className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer">
                    M
                  </button>
                  <button className="text-gray-600 w-6 h-6 text-sm  ring-1 ring-gray-600  rounded-sm flex items-center justify-center cursor-pointer">
                    L
                  </button>
                  {/* <!-- Single Size Ends --> */}
                </div>
              </div>
              {/* <!-- Size Section Ends --> */}

              {/* <!-- Color Filter --> */}
              <div className="pt-4">
                <p className="text-gray-600 font-semibold">Color</p>

                <div className="start gap-2 ">
                  {colors.map((currentColor: string, index: number) => {
                    return (
                      <div key={index}>
                        <ColorButton
                          currentColor={currentColor}
                          index={index}
                          colors={colors}
                          selected={selected}
                          setSelected={setSelected}
                          setIndex={setIndex}
                        />
                      </div>
                    );
                  })}
                </div>
                {/* <!-- Single Size Ends --> */}
              </div>

              {/* <!-- Increase Decrease Quantity --> */}
              <div
                className={`
              "text-lg font-semibold border mt-4 border-warning center rounded-sm w-fit text-gray-600`}
              >
                <button className="   px-2 py-0.5" onClick={setDecrease}>
                  -
                </button>
                <button className=" border-r text-sm border-l border-r-warning border-l-warning px-2 py-0.5 ">
                  {temporaryQuantity}
                </button>
                <button className="  px-2 py-0.5" onClick={setIncrease}>
                  +
                </button>
              </div>
              {/* <!-- End Increase Decrease Quantity --> */}

              {/* <!-- Button --> */}
              <div className="font-roboto gap-4 flex items-center pb-5 mt-6 ">
                 <button className="text-white  border-2 bg-orangeRed hover:text-orangeRed hover:bg-white font-semibold border-orangeRed  flex items-center justify-center w-48 h-10 gap-4 rounded group">
                    <FaOpencart className="font-xl font-bold"/>
CART
                  
                </button>

                <button className="text-darkChocolate  border-2 hover:bg-darkChocolate hover:text-white font-semibold border-darkChocolate  flex items-center justify-center w-48 h-10 gap-4 rounded group">
                  
                    <FavoriteBorder className="group-hover:text-white" sx={{color:"#28170bff",
                  '&:hover': {
                    color: 'white', 
                  },
                  }}/> WISH LIST
                </button>
              </div>

              <hr className="border-t border-gray-400 " />
              <div className="mt-5 mb-6 flex items-center gap-2 text-gray-600">
                <div className=" w-8 h-8 border border-gray-600  flex justify-center items-center rounded-full">
                  <Link href="" className="0 ">
                    <Facebook />
                  </Link>
                </div>

                <div className=" w-8 h-8 border border-gray-600  flex justify-center items-center rounded-full">
                  <Link href="">
                    <BsInstagram />
                  </Link>
                </div>

                <div className=" w-8 h-8 border border-gray-600  flex justify-center items-center rounded-full">
                  <Link href="" className="0 ">
                    <Twitter />
                  </Link>
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
