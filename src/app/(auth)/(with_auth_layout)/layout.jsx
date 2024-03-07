import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='center flex-col py-16'>
      <span className='text-2xl'>Welcome To <span className=' text-lightOrange '>Jazehmart</span></span>
      {children}
    </div>
  )
}

export default Layout

