import React from 'react'

interface CollectionCardProps {
    image:string;
    title1:string;
    title2:string;
    otherClass:string;

}
const CollectionCard:React.FC<CollectionCardProps> = ({image, title1, title2, otherClass}) => {
  return (
    <div className={`${otherClass} bg-slate-200/40 overflow-hidden p-8 `}>
        <img src={image} className=' lg:w-60 w-40 h-full hover:scale-105 transition-transform duration-500' alt="" />
        <div className="center flex-col">
            <p className='lg:text-lg text-base mt-3'>{title1}</p>
            <p className='lg:text-base text-xs mt-3 font-sans '>{title2}</p>
            <button
            className="px-3 py-2 rounded-md bg-sandyBrown text-xs mt-3 font-sans text-white min-w-[88px] hover:bg-tan"
            style={{ backgroundColor: "chocolate" }}
          >
            SHOP NOW
          </button>

        </div>
      
    </div>
  )
}

export default CollectionCard
