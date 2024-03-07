import { Checkbox, FormControlLabel} from "@mui/material";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "SignIn",
};
const SignIn = () => {
  return (
    <div className="container mx-auto text-sm  px-6 py-3 rounded-md w-full gap-4">
      {/* <h2 className="text-lg  font-base text-center mb-1 text-orangeRed">
        SIGN IN{" "}
      </h2> */}

      <div className=" center md:flex-row flex-col gap-4 md:shadow-none shadow-xl p-5">
      <form action="" className=" w-full md:w-[50%] lg:w-[40%]">
        <div className="space-y-6 w-full">
          <div className="w-full">
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              {" "}
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input placeholder:text-xs"
              placeholder="Enter your name"
            />
          </div>

          <div className="">
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              {" "}
              Password
            </label>
            <input
              type="email"
              className=" input placeholder:text-xs"
              id="password "
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className=" space-x-2">
              <FormControlLabel
                label={<p className="text-sm">Remember Me</p>}
                control={
                  <Checkbox
                    sx={{
                      color: "red",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                    disableRipple
                    inputProps={{ "aria-label": "Checkbox demo" }}
                    size="small"
                  />
                }
              />
            </div>

            <Link href="" className="text-red-600">
              Forget password?
            </Link>
          </div>
        </div>
        
      </form>

      <div className=" w-full md:w-[40%]  space-y-5">
      <form className="md:mt-0 ">
          <button
            type="submit"
            className=" block text-center bg-orangeRed w-full rounded-md text-white h-10  ring-1 hover:bg-transparent hover:text-orangeRed ring-orangeRed md:mt-0 "
          >
            Log in
          </button>
        </form>
      <div className=" flex justify-center relative">
        <div className="text-gray-600 text center uppercase px-3 bg-gray-200 z-10 ">
          OR LOG IN WITH
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>

      <div className="flex  gap-4">
        <Link
          href=""
          className="w-1/2 py-2 text-center text-white bg-blue-800 rounded-md uppercase font-roboto font-medium text-sm hover:bg-blue-700"
        >
          Faccebook
        </Link>

        <Link
          href=""
          className="w-1/2 py-2 text-center text-white bg-red-500 rounded-md uppercase font-roboto font-medium text-sm hover:bg-red-400"
        >
          Google
        </Link>
      </div>
      <p className=" text-gray-600 text-center">
        Don't have an Account?
        <Link href="/signup" className="text-red-600">
          {" "}
          Sign Up Now!
        </Link>
      </p>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
