"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Slider from "../../components/common/CustomSlider";
import FeatureCard from "@/components/common/FeatureCard";
import { featureCardInfo, shopByCategory } from "../../constant/index";
import ShopByCategory from "@/components/common/ShopByCategory";
import "../customcss.css";
import Offer from "@/components/common/Offer";
import productsData from "../../../public/products.json";
import ProductCard from "@/components/common/ProductCard";
import { useFilterContext } from "@/context_reducer/filterContext";
import chairad from "../../../public/images/ad/chairad.svg";
import Image from "next/image";
import MiniProductCard from "@/components/common/ui/MiniProductCard";

const Home = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const {
    getFeaturedData,
    sofa,
    dinning,
    kidsFurniture,
    bed,
    getNewData,
    newProducts,
  } = useFilterContext();

  useEffect(() => {
    getFeaturedData();
    getNewData();
  }, []);

  return (
    <div className=" ">
      <Slider />

      <div className="container py-16 ">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
          {featureCardInfo.map((info, index) => (
            <FeatureCard {...info} />
          ))}
        </div>
      </div>

      <div className="container py-16">
        <p className="text-3xl font-medium text-gray-800 uppercase mb-6">
          shop by category
        </p>

        <div className="grid grid-cols-3">
          {shopByCategory.map((category, index) => (
            <ShopByCategory {...category} />
          ))}
        </div>
      </div>

      <div className="container py-16 w-full  center flex-col">
        {/* <p className="text-3xl font-medium text-gray-800 uppercase mb-6">
          Featured Products
        </p> */}
        <img src="/images/featured.svg" className="mb-10" alt="" />
        <div className="grid  md:grid-cols-4 grid-cols-2 gap-3">
          
          <div className="">
          <p className="  text-[20px]">Bed</p>
            {bed.map((product) => (
              <MiniProductCard
                key={product.id} // Make sure to add a unique key for each item
                name={product.name}
                category={product.category}
                price={product.price}
                discount={product.discount}
                images={
                  Array.isArray(product.images)
                    ? product.images[0]
                    : product.images
                }
                colors={product.colors}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
          <div className="">
          <p className="  text-[18px]">Sofa</p>

            {sofa.map((product) => (
              <MiniProductCard
                key={product.id} // Make sure to add a unique key for each item
                name={product.name}
                category={product.category}
                price={product.price}
                discount={product.discount}
                images={
                  Array.isArray(product.images)
                    ? product.images[0]
                    : product.images
                }
                colors={product.colors}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
          <div className="">
          <p className="  text-[18px]">Dinnig</p>

            {dinning.map((product) => (
              <MiniProductCard
                key={product.id} // Make sure to add a unique key for each item
                name={product.name}
                category={product.category}
                price={product.price}
                discount={product.discount}
                images={
                  Array.isArray(product.images)
                    ? product.images[0]
                    : product.images
                }
                colors={product.colors}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
          <div className="">
          <p className="  text-[18px]">Kid's Furniture</p>

            {kidsFurniture.map((product) => (
              <MiniProductCard
                key={product.id} // Make sure to add a unique key for each item
                name={product.name}
                category={product.category}
                price={product.price}
                discount={product.discount}
                images={
                  Array.isArray(product.images)
                    ? product.images[0]
                    : product.images
                }
                colors={product.colors}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container w-full">
        <Image src={chairad} className="w-full h-[px]" alt="chairad" />
      </div>

      <div className="container py-16 center flex-col">
        <img src="/images/new.svg" className="mb-10 w-[40%]" alt="" />

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 ">
          {newProducts.map((product) => (
            <ProductCard
              key={product.id} // Make sure to add a unique key for each item
              name={product.name}
              category={product.category}
              price={product.price}
              discount={product.discount}
              images={
                Array.isArray(product.images)
                  ? product.images[0]
                  : product.images
              }
              colors={product.colors}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
