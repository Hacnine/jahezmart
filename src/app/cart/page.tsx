import CartItems from '@/components/common/cart/CartItems'
import React from 'react'

const Cart = () => {
  return (
    <div className='wrapper w-[70%]'>
      <CartItems width={'100%'} height={900} large={true}/>
    </div>
  )
}

export default Cart
