import React from 'react'

const SignUp = () => {
  return (
      <>
      <div className="container py-16">
 
 <div className="max-w-lg mx-auto shadow-xl px-6 py-7 rounded overflow-hidden ">
     <h2 className="text-2xl uppercase font-medium mb-1">Register</h2>
     

     <form className="pt-8" action="">
      <div className="space-y-6">
         <div>
             <label htmlFor="name" className="text-gray-600 mb-2 block"> Name</label>
             <input type="text" id="name" className="block w-full border border-gray-500 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[] placeholder-gray-400  " placeholder="Enter your name"/>
         </div>
         
         <div>
             <label htmlFor="phone" className="text-gray-600 mb-2 block"> Phone Number</label>
             <input type="number" id="phone" className="block w-full border border-gray-500 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[] placeholder-gray-400  " placeholder="Enter your phone number"/>
         </div>

         <div>
             <label htmlFor="email" className="text-gray-600 mb-2 block"> Email Address</label>
             <input type="email" id="email" className="block w-full border border-gray-500 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[] placeholder-gray-400  " placeholder="Enter your name"/>
         </div>

            <div>
             <label htmlFor="password" className="text-gray-600 mb-2 block"> Password</label>
             <input type="email" className="block w-full border border-gray-500 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[] placeholder-gray-400  " id="password" placeholder="Enter your password"/>
            </div>

            <div>
             <label htmlFor="re-password" className="text-gray-600 mb-2 block"> Re-Enter Password</label>
             <input type="email" className="block w-full border border-gray-500 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[] placeholder-gray-400  " id="password" placeholder="Renter your password"/>
            </div>

      </div>
      <div className="mt-4">
       <button type="submit" className=" block text-center bg-orangeRed w-full rounded-md text-white h-10  ring-1 hover:bg-transparent hover:text-orangeRed ring-orangeRed mt-4">Register</button>
      </div>
      
     </form>

     {/* <!-- Login with --> */}
     <div className="mt-6 flex justify-center relative">
         <div className="text-gray-600 text center uppercase px-3 bg-white z-10 ">OR Register WITH</div> 
      <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
     </div>

     <div className="flex mt-4 gap-4">
       <a href="" className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">Faccebook</a>

       <a href="" className="w-1/2 py-2 text-center text-white bg-red-500 rounded uppercase font-roboto font-medium text-sm hover:bg-red-400">Google</a>
       
     </div>
     <p className="mt-4 text-gray-600 text-center">Have an Account?
       <a href="/signin" className="text-red-600">Login Now!</a>
     </p>
 </div>
</div>
      </>
  )
}

export default SignUp
