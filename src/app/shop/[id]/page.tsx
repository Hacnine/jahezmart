"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFilterContext } from "@/context_reducer/filterContext";
import StarRating from "@/components/common/ui/StarRating";
import ColorButton from "@/components/buttons/ColorButton";
import Link from "next/link";
import {
  Facebook,
  FavoriteBorder,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { BsInstagram, BsStarFill } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa6";
import { useCartContext } from "@/context_reducer/cartContext";
import TooltipWrapper from "@/components/wrapper/TooltipWrapper";
import CategorySlider from "@/components/slider/CategorySlider";
import { DescriptionItem } from "@/type";
import { FaFacebookF, FaRegStar, FaStar } from "react-icons/fa";
import StarReview from "@/components/common/ui/StarReview";
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
  console.log(full_details);

  const {
    sentCartItem,
    deleteCartSingleProduct,
    sentWishListItem,
    wishListProducts,
    removeFromWishList,
  } = useCartContext();
  const { filterByCategory } = useFilterContext();
  const categoryProducts = filterByCategory(category);

  const [selected, setSelected] = useState<string>(colors[0]);
  const [open, setOpen] = React.useState(false);
  const [openWishList, setOpenWishList] = React.useState(false);
  const [message, setMessage] = useState("Added to cart!");
  const [wishListMessage, setWishListMessage] = useState("Added to WishList!");

  const [favorite, setFavorite] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const firstColorKey = Object.keys(images)[index];
  const firstImagePath = (images as { [color: string]: string[] })[
    firstColorKey
  ]?.[0];

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    if (favorite) {
      removeFromWishList(setOpenWishList, setWishListMessage, id);
    } else {
      sentWishListItem(setOpenWishList, setWishListMessage, {
        id,
        name,
        firstImagePath,
        quantity,
        price,
        stock,
        selected,
      });
    }
  };

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

  useEffect(() => {
    const existingProduct = wishListProducts.find((item) => item.id === id);
    if (existingProduct) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [wishListProducts, id]);

  return (
    <>
      <div className="wrapper my-5">
        {/* <!-- Product View --> */}
        <div className=" grid grid-cols-2">
          <div className="col-span-1">
            <img src={firstImagePath} alt="" />

            {/* <!-- Mini Product Slide --> */}
            <div className="grid grid-cols-5 items-center justify-between mt-3 gap-3 mb-6">
              {Object.keys(images).map((color) =>
                images[color].map((imageUrl: string, index: number) => (
                  <img
                    key={`${color}-${index}`}
                    src={imageUrl}
                    alt=""
                    className="border border-1 border-orangeRed w-full h-full object-cover transform transition-transform hover:scale-110 hover:border-orangeRed"
                  />
                ))
              )}
            </div>
            {/* <!-- Mini Product Slide Ends--> */}

            {/* <!-- Product Description --> */}
            <div className="mt-5 mb-6  text-sm space-y-3">
              <p className="text-2xl text-gray-800 font-bold">
                Product Description
              </p>
              <hr className="border-t border-gray-200 " />

              {description.map((text: DescriptionItem) => (
                <>
                  <p className="text-gray-600 text-base font-semibold">
                    {text.title}
                  </p>

                  <p className="text-gray-600">{text.description}</p>
                </>
              ))}
            </div>

            <div>
              <p className="text-gray-600 font-bold text-lg">
                Full Description
              </p>
              {full_details.map((item: string, index: number) => (
                <div key={index}>
                  {/* Iterate over each property in the object */}
                  {Object.entries(item).map(([key, value]) => (
                    <div key={key}>
                      <strong className="text-gray-700">{key}:</strong> {value}
                    </div>
                  ))}
                  <br />
                </div>
              ))}
            </div>
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
                <TooltipWrapper open={open} setOpen={setOpen} message={message}>
                  <button
                    className="text-white  border-2 bg-orangeRed hover:text-orangeRed hover:bg-white font-semibold border-orangeRed  flex items-center justify-center w-48 h-10 gap-4 rounded group transition-colors duration-300"
                    onClick={() =>
                      sentCartItem(setOpen, setMessage, {
                        id,
                        name,
                        firstImagePath,
                        quantity,
                        price,
                        stock,
                        selected,
                      })
                    }
                  >
                    <FaOpencart className="text-2xl font-extrabold" />
                    ADD TO CART
                  </button>
                </TooltipWrapper>

                <TooltipWrapper
                  open={openWishList}
                  setOpen={setOpenWishList}
                  message={wishListMessage}
                >
                  <button
                    className="text-darkChocolate  border-2 hover:bg-darkChocolate hover:text-white font-semibold border-darkChocolate  center w-48 h-10 gap-1 rounded group transition-colors duration-300"
                    onClick={handleFavoriteClick}
                  >
                    <FavoriteBorder
                      className="group-hover:text-white"
                      sx={{
                        color: "#28170bff",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    />{" "}
                    WISH LIST
                  </button>
                </TooltipWrapper>
              </div>

              <hr className="border-t border-gray-200 " />
              <div className="mt-5 mb-6 flex items-center gap-2 text-orangeRed">
                <div className=" w-8 h-8 border border-orangeRed  flex justify-center items-center rounded-full">
                  <Link href="" className="0 ">
                    <FaFacebookF />
                  </Link>
                </div>

                <div className=" w-8 h-8 border border-orangeRed  flex justify-center items-center rounded-full">
                  <Link href="">
                    <BsInstagram />
                  </Link>
                </div>

                <div className=" w-8 h-8 border border-orangeRed  flex justify-center items-center rounded-full">
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

        <h1 className="text-2xl text-gray-800 font-bold mb-5">
          Related Products
        </h1>
        <CategorySlider category={category} />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="start gap-12">
          <div className="space-y-1 mb-4">
            <p className="text-4xl font-semibold">4.9 / 5</p>
            <StarRating rating={5} />
            <div className="text-sm text-gray-500">20 Ratings</div>
          </div>

          <div className="">
            <StarReview rating={4.9} width="90%" review={230} />
            <StarReview rating={3.9} width="80%" review={134} />
            <StarReview rating={2.9} width="60%" review={10} />
            <StarReview rating={1.9} width="30%" review={5} />
          </div>
        </div>

    
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Product Reviews</h2>
          <div className="space-y-8">
            {[
              {
                user: "Jabir",
                date: "30 Jul 2021",
                content:
                  "Lorem Ipsumin gravida nibh vel velit auctor aliquet...",
                images: ["/images/products/comment1.jpg", "/images/products/comment2.jpg"], // Example image paths
              },
              {
                user: "Abir.",
                date: "30 Jul 2021",
                content:
                  "Lorem Ipsumin gravida nibh vel velit auctor aliquet...",
                images: ["/images/products/comment3.jpg", "/images/products/comment4.jpg"], // Example image paths
              },
            ].map((review, index) => (
              <div key={index} className="border rounded p-4">
                <div className="flex items-center mb-2">
                  <div className="text-lg font-bold mr-2">{review.user}</div>
                  <StarRating rating={4.4}/>
                </div>
                <div className="text-sm text-gray-500 mb-2">{review.date}</div>
                <div className="text-gray-800">{review.content}</div>
                <div className="mt-4 flex space-x-4">
                  {review.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Review Image ${idx + 1}`}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>


      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>
        <div className="space-y-8">
          {[{ user: 'Dr.SaifuzZ.', date: '27 Oct 2021', content: 'There is no discount sir' }, { user: 'Store Admin', date: '27 Oct 2021', content: 'Any discount?' }, { user: 'Dr.SaifuzZ.', date: '27 Oct 2021', content: 'There is no discount sir' }, { user: 'Store Admin', date: '27 Oct 2021', content: 'Any discount?' }].map(
            (review, index) => (
              <div key={index} className="border rounded p-4">
                <div className="flex items-center mb-2">
                  <div className="text-lg font-bold">{review.user}</div>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, index) => (
                      <BsStarFill key={index} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">{review.date}</div>
                <div className="text-gray-800">{review.content}</div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="border rounded p-4 mb-8">
        <div className="text-lg font-bold mb-2">Question about this product (3)</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Ask a Question
        </button>
      </div>
    </>
  );
};

export default Page;
