"use client"
import { useFilterContext } from '@/context_reducer/filterContext';
import React, { Fragment, useState, useEffect } from "react";
import ProductCard from '../../card/ProductCard';

import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
  grid:boolean;
}

const AllProducts:React.FC<Props> = ({grid}) => {

  const { filteredProducts, updateFilteredProducts } = useFilterContext();
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  // const filteredProducts = filteredProducts.filter(product =>
  //   product.name.toLowerCase().includes(query?.toLowerCase() || '')
  // );

  return (
    <div className='lg:col-span-9 col-span-12  '>
       {/* <div className="  w-full center flex-col"> */}
     
       
        <div className={` lg:ml-8  grid ${grid? 'lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2': 'grid-cols-1'} gap-6`}>
          {filteredProducts.map((product, index) => (
           <div key={index}>
             <ProductCard
              {...product}
            />
           </div>
          ))}
        </div>
      </div>
    // </div>
  )
}

export default AllProducts
