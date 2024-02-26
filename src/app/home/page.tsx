"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Slider from "../../components/slider/HeroImageSlider";
import FeatureCard from "@/components/common/FeatureCard";
import { featureCardInfo, shopByCategory } from "../../constant/index";
import ShopByCategory from "@/components/common/ShopByCategory";
import "../customcss.css";
import ProductCard from "@/components/card/ProductCard";
import { useFilterContext } from "@/context_reducer/filterContext";
import chairad from "../../../public/images/ad/chairad.svg";
import Image from "next/image";
import MiniProductCard from "@/components/card/MiniProductCard";

const Home = () => {
  const { featuredSofa: sofa, featuredDinning: dinning, featuredKidsFurniture: kidsFurniture, featuredBed: bed, newProducts } = useFilterContext();

  return (
    <div className="home ">
      <Slider />

      <div className="center gap-3">
      <div>
        <div className=" wrapper py-9  grid lg:grid-cols-3 sm:grid-cols-1 gap-6  mx-2">
          {featureCardInfo.map((info, index) => (
            <div key={index} className="px-2">
              <FeatureCard {...info} />
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className="wrapper py-9 center flex-col">
        <img src="/images/titles/category.svg" className="mb-9" alt="" />

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
          {shopByCategory.map((category, index) => (
            <div key={index}>
              <ShopByCategory {...category} />
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper py-9 w-full  center flex-col">
        {/* <p className="text-3xl font-medium text-gray-800 uppercase mb-6">
          Featured Products
        </p> */}
        <img src="/images/titles/featured.svg" className="mb-9" alt="" />
        <div className="grid  xl:grid-cols-4 lg:grid-cols-3 grid-cols-2  gap-3">
          <div className="">
            <p className=" mb-3  text-[20px] font-semibold">Bed</p>
            {bed.map((product) => (
              <MiniProductCard
                {...product}
              />
            ))}
          </div>
          <div className="">
            <p className="font-bold  text-[18px] mb-3">Sofa</p>

            {sofa.map((product) => (
              <MiniProductCard
              {...product}
              />
            ))}
          </div>
          <div className="">
            <p className="font-semibold  text-[18px] mb-3">Dinnig</p>

            {dinning.map((product) => (
              <MiniProductCard
              {...product}
              />
            ))}
          </div>
          <div className="xl:block lg:hidden sm:block">
            <p className="text-[18px] font-semibold mb-3">Kid's Furniture</p>

            <div className="">
              {kidsFurniture.map((product) => (
                <MiniProductCard
                {...product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper w-full">
        <Image src={chairad} className="w-full h-[px]" alt="chairad" />
      </div>

      <div className="wrapper py-9 center flex-col">
        <img src="/images/titles/new.svg" className="mb-9" alt="" />

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 ">
          {newProducts.map((product) => (
            <ProductCard
              id={product.id} // Make sure to add a unique key for each item
              name={product.name}
              category={product.category}
              quantity={product.quantity}
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
              stock={product.stock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
