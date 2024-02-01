import React from "react";
import Slider from "../../components/common/CustomSlider";
import FeatureCard from "@/components/common/FeatureCard";
import { featureCardInfo,shopByCategory } from "../../constant/index";
import ShopByCategory from "@/components/common/ShopByCategory";
import '../customcss.css'
import Offer from "@/components/common/Offer";
import product2 from '../../images/products/sofa-1.png';
import product1 from '../../images/products/product1.jpg';
const Home = () => {
  return (
    <div className=" ">
      <Slider />
      <div className=" py-16 ">
        <div className="w-10/12 grid lg:grid-cols-3 gap-6 mx-auto justify-center">
          {featureCardInfo.map((info) => (
            <FeatureCard {...info} />
          ))}
        </div></div>

        <div className="container py-16">
          <p className="text-3xl font-medium text-gray-800 uppercase mb-6">
            shop by category
          </p>
          <div className="grid grid-cols-3 gap-3">
            {shopByCategory.map((categories)=>(
              <ShopByCategory {...categories}/>
            ))}
          </div>
        </div>

        <div  className="container flex items-center lg:justify-between ">
        <Offer image={product2} offerPersentase={'30% offer'} offerType={'Free Shipping'} type={'Attractive Natural Furniture'} bg={' bg-blue-200'}/>

        <Offer image={product1} offerPersentase={'50% offer'} offerType={'Flash Sale'} type={'Attractive Natural Furniture'} bg={' bg-slate-200'}/>
        </div>
      
      <div id='hexagon'>

      </div>
    </div>
  );
};

export default Home;
