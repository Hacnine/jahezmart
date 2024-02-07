import { Facebook, Google, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    
  <footer className=" pt-14 " style={{background:"#28170bff"}}>
  <div className="text-zinc-300 px-10 py-5 font-poppins flex ">
    <div className="w-2/5  font-semibold">
      <img src="/images/logo.svg" alt=""/>
      <p className="pt-2">Let's Decorate Your Dream.</p>
    </div>

    <div className="w-1/5">
      <p>Pre Sales FAQS</p>
      <p>Submit A Ticket</p>
    </div>

    <div className="w-1/5 ">
      <p>Services</p>
      <p>Help Center</p>
    </div>

    <div className="w-1/5">
      <p>Showcase</p>
      <p>Support</p>
    </div>

    <div className="w-1/5">
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Resources</p>
    </div>
  </div>
  <hr/>




  <div className="flex justify-center p-16 text-white">
    <div className="">
      <div className="flex justify-center gap-3">
        <Twitter className='ring-2 ring-white rounded-full p-2' fontSize='large'/>
        <Google className='ring-2 ring-white rounded-full p-2' fontSize='large'/>
        <Facebook className='ring-2 ring-white rounded-full p-2' fontSize='large'/>
      </div>

      <p className=" font-sans pt-3">© Copy All rights reserved.</p>
    </div>
  </div>
</footer>
  )
}

export default Footer
