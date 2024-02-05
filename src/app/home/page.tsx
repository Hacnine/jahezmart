"use client"

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
import {useFilterContext} from "@/context_reducer/filterContext"
import chairad from '../../../public/images/ad/chairad.svg'
import Image from "next/image";
import MiniProductCard from "@/components/common/ui/MiniProductCard";

const Home = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const { getFeaturedData,featuredProducts, getNewData,newProducts } = useFilterContext();

  // const getFeaturedData2 = () => {
  //   const featureData = productsData.filter((currentElement) => {
  //     return currentElement.featured === true;
  //   });
  //   setFeaturedData(featureData);
  // };

  useEffect(() => {
    getFeaturedData();
    getNewData();
    
  }, []);
  console.log(getFeaturedData,getNewData)

  return (
    <div className=" ">
      <Slider />
      {/* ... (rest of your code) */}
      <div className="container py-16">
        <p className="text-3xl font-medium text-gray-800 uppercase mb-6">
          Featured Products
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {featuredProducts.map((product) => (
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

      <div className="container w-full">
        <Image src={chairad} className="w-full h-[px]" alt="chairad" />
      </div>
      
      <div className="container py-16">
        <p className="text-3xl font-medium text-gray-800 uppercase mb-6">
          TOP NEW ARRIVAL
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
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
