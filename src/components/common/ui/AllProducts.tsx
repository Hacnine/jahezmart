"use client"
import { useFilterContext } from '@/context_reducer/filterContext';
import React from 'react'
import ProductCard from '../ProductCard';
import TitleBg from '../TitleBg';

const AllProducts = () => {

   

    const { allProducts } =
    useFilterContext();
  return (
    <div className='center flex-col'>
       <div className="container py-16 w-full center flex-col">
       <img src="/images/featured.svg" className="mb-10" alt="" />
        <TitleBg image={'images/bg.svg'}/>
        {/* <img src="/images/bg.svg" alt="" /> */}
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 w">
          {allProducts.map((product) => (
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
  )
}

export default AllProducts
