"use client"
import { useFilterContext } from '@/context_reducer/filterContext';
import React, { Fragment, useState, useEffect } from "react";
import ProductCard from '../ProductCard';

import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';

const AllProducts = () => {

  const { allProducts, updateFilteredProducts } = useFilterContext();
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query?.toLowerCase() || '')
  );

  return (
    <div className='center flex-col'>
       <div className="container py-16 w-full center flex-col">
       <img src="/images/titles/all.svg" className="mb-10" alt="" />
       
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 w">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
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
