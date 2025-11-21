import React from 'react'

const CollectionCard = ({image, title1, title2, otherClass}) => {
  return (
    <div className={`${otherClass} bg-slate-200/40 overflow-hidden p-8 `}>
        <img src={image} className=' lg:w-60 w-40 h-full hover:scale-105 transition-transform duration-500' alt="" />
        <div className="center flex-col">
            <p className='lg:text-lg text-base mt-3'>{title1}</p>
            <p className='lg:text-base text-xs mt-3 font-sans '>{title2}</p>
            <button
            className="button">
            SHOP NOW
          </button>

        </div>
      
    </div>
  )
}

export default CollectionCard
