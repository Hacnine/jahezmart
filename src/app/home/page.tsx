import React from "react";
import Head from "next/head";

import Slider from "../../components/common/CustomSlider";
import FeatureCard from "@/components/common/FeatureCard";
import { featureCardInfo, shopByCategory } from "../../constant/index";
import ShopByCategory from "@/components/common/ShopByCategory";
import "../customcss.css";
import Offer from "@/components/common/Offer";
import productsData from '../../../public/products.json';


import ProductCard from "@/components/common/ProductCard";
const Home = () => {
  return (
    <div className=" ">
      <Head>
        <title>Your Dynamic Page Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <div className=" py-16 ">
        <div className="w-10/12 grid lg:grid-cols-3 gap-6 mx-auto justify-center">
          {featureCardInfo.map((info) => (
            <FeatureCard {...info} />
          ))}
        </div>
      </div>

      <div className="container flex items-center lg:justify-between ">
        <Offer
          image={"/images/products/offer-2.png"}
          offerPersentase={"30% offer"}
          offerType={"Free Shipping"}
          type={"Attractive Natural Furniture"}
          bg={" bg-blue-100"}
        />

        <Offer
          image={"/images/products/offer-1.png"}
          offerPersentase={"50% offer"}
          offerType={"Flash Sale"}
          type={"Attractive Natural Furniture"}
          bg={" bg-slate-200"}
        />
      </div>

      <div className="container py-16">
        <p className="text-3xl font-medium text-gray-800 uppercase mb-6">
          shop by category
        </p>
        <div className="grid grid-cols-3 gap-3">
          {shopByCategory.map((categories) => (
            <ShopByCategory {...categories} />
          ))}
        </div>
      </div>

      <div className="container py-16">
      <p className="text-3xl font-medium text-gray-800 uppercase mb-6">TOP NEW ARRIVAL</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
        {productsData.map((product) => (
        <ProductCard  
        name={product.name}
        category={product.category}
        price={product.price} 
        discount={product.discount}
        images={Array.isArray(product.images) ? product.images[0] : product.images}
        colors={product.colors}
        star={product.star}
        rating={product.rating} />
      ))}
        </div>
      </div>

      <div id="hexagon"></div>
    </div>
  );
};

export default Home;
