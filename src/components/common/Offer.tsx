import { Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'

interface  OfferProps {
    image:StaticImageData;
    offerPersentase:string;
    offerType:string;
    type:string;
    bg:string;
    
}

const Offer:React.FC<OfferProps>  = ({image,offerPersentase, offerType, type, bg}) => {
  return (
    <div className={`${bg} w-[48%] grid grid-cols-3 px-10 py-10`}>
        
        <div className=" col-span-2 ">
            <p className="text-lg font-semibold text-red-500  leading-9">{offerPersentase}</p>
            <p className="text-xl font-bold text-gray-900">{offerType}</p>
            <p className=" text-gray-600 leading-8">{type}</p>
            <Link href="#">
            <Button className=' bg-sandyBrown font-semibold text-white hover:bg-tan' sx={{backgroundColor:'chocolate'}}>SHOP NOW</Button>
            </Link>
        </div>
        <div className=" col-span-1 flex items-center justify-self-end">
        <Image src={image} alt={offerType}  className='w-full h-full hover:scale-105 hover:cursor-pointer transition-transform duration-100'/>
        </div>

      
    </div>
  )
}

export default Offer
