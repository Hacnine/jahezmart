import SummaryCard from '@/components/card/SummaryCard'
import React from 'react'

const Checkout = () => {
  return (
    <div>
      <>
  {/* Checkout Wrapper */}
  <div className="container grid grid-cols-12 items-start pb-16 pt-2">
    <div className="col-span-8 border border-gray-300 rounded p-6">
      <div className="space-y-4 p-3">
        <div className="grid grid-cols-2 gap-4 3 ">
          <div>
            <label
              htmlFor="firstname"
              className="text-gray-600 font-semibold block"
            >
              First Name <span className="text-[#ff0000]">*</span>
            </label>
            <input type="text" className="input-box" />
          </div>
          <div>
            <label
              htmlFor="firstname"
              className="text-gray-600 font-semibold block"
            >
              Last Name <span className="text-[#ff0000]">*</span>
            </label>
            <input type="text" className="input-box" />
          </div>
        </div>
        <div>
          <label
            htmlFor="firstname"
            className="text-gray-600 font-semibold block"
          >
            Company Name <span className="text-[#ff0000]">*</span>
          </label>
          <input type="text" className="input-box" />
        </div>
        <div>
          <label
            htmlFor="firstname"
            className="text-gray-600 font-semibold block"
          >
            Region Name <span className="text-[#ff0000]">*</span>
          </label>
          <input type="text" className="input-box" />
        </div>
        <label
          htmlFor="firstname"
          className="text-gray-600 font-semibold block"
        />
        <div>
          <label
            htmlFor="firstname"
            className="text-gray-600 font-semibold block"
          >
            Street Address <span className="text-[#ff0000]">*</span>
          </label>
          <input type="text" className="input-box" />
        </div>
        <div>
          <label
            htmlFor="firstname"
            className="text-gray-600 font-semibold block"
          >
            Town/City <span className="text-[#ff0000]">*</span>
          </label>
          <input type="text" className="input-box" />
        </div>
      </div>
    </div>
    {/* <div className="col-span-4 border border-gray-300 rounded ml-9 p-6"> */}
      <SummaryCard/>
    {/* </div> */}
  </div>
  {/* Checkout Wrapper Ends*/}
</>

    </div>
  )
}

export default Checkout
