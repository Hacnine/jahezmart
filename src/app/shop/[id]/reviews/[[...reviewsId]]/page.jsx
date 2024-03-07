import React from 'react'

const Reviews = ({params}) => {

if(params.reviewsId?.length === 2)
{
  return <p>Alhamdulill {params.reviewsId.length} </p>
}

else if (params.reviewsId?.length === 3)
{
  return <p>AllahuAkbar {params.reviewsId.length} </p>
}

  return (
    <div>
      Bismillah
    </div>
  )
}

export default Reviews
