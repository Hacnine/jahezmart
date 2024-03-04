import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export const metadata = {
  title: "SignIn"
}
const SignIn = () => {
  return (
    <div className="container py-16 text-sm">
      <div className="max-w-lg mx-auto shadow-xl px-6 py-7 rounded overflow-hidden ">
        <h2 className="text-2xl  font-base text-center mb-1 text-orangeRed">Sign In </h2>

        <form action="">
          <div className="space-y-6">
            <div>
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
                        color:"red",
                        '&.Mui-checked': {
                          color:"red",
                        },
                       
                       
                      }}
                      disableRipple
                      inputProps={{ "aria-label": "Checkbox demo" }}
                      size="small"
                    />
                  }
                />
              </div>

              <a href="" className="text-red-600">
                Forget password?
              </a>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className=" block text-center bg-orangeRed w-full rounded-md text-white h-10  ring-1 hover:bg-transparent hover:text-orangeRed ring-orangeRed mt-4"
            >
               Log in
            </button>
          </div>
        </form>

        {/* <!-- Login with --> */}
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 text center uppercase px-3 bg-gray-200 z-10 ">
            OR LOG IN WITH
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>

        <div className="flex mt-4 gap-4">
          <a
            href=""
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >
            Faccebook
          </a>

          <a
            href=""
            className="w-1/2 py-2 text-center text-white bg-red-500 rounded uppercase font-roboto font-medium text-sm hover:bg-red-400"
          >
            Google
          </a>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an Account?
          <a href="/signup" className="text-red-600">
          {" "}  Sign Up Now!
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
