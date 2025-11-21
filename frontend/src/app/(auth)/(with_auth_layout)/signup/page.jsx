"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRegisterMutation } from "../../../../store/api";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../../store/slices/authSlice";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [register, { isLoading, error }] = useRegisterMutation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidationError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setValidationError("Passwords do not match");
      return;
    }

    try {
      const result = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }).unwrap();
      
      if (result.token) {
        dispatch(setCredentials(result));
      }
      router.push("/account");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  const handleOAuthSignIn = async (provider) => {
    try {
      const result = await signIn(provider, {
        callbackUrl: "/account",
        redirect: true,
      });
      
      if (result?.error) {
        console.error("OAuth sign in failed:", result.error);
      }
    } catch (error) {
      console.error("OAuth error:", error);
    }
  };

  return (
    <div className=" container max-w-lg mx-auto shadow-xl px-6 py-3 rounded overflow-hidden text-sm ">
      <h2 className="text-lg uppercase font-base mb-1 text-center text-orangeRed">
        Sign Up
      </h2>

      <form className="pt-8" onSubmit={handleSubmit}>
        <div className="space-y-6">
          {(error || validationError) && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {validationError || error?.data?.message || "Registration failed. Please try again."}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input placeholder:text-xs "
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input placeholder:text-xs "
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              className="input placeholder:text-xs "
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-gray-600 mb-2 block">
              Re-Enter Password
            </label>
            <input
              type="password"
              className="input placeholder:text-xs "
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Renter your password"
              required
            />
          </div>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            disabled={isLoading}
            className=" block text-center bg-orangeRed w-full rounded-md text-white h-10  ring-1 hover:bg-transparent hover:text-orangeRed ring-orangeRed mt-4 disabled:opacity-50"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>

      {/* <!-- Login with --> */}
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 text center uppercase px-3 bg-white z-10 ">
          OR Register WITH
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>

      <div className="flex mt-4 gap-4">
        <button
          type="button"
          onClick={() => handleOAuthSignIn("facebook")}
          className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
        >
          Facebook
        </button>

        <button
          type="button"
          onClick={() => handleOAuthSignIn("google")}
          className="w-1/2 py-2 text-center text-white bg-red-500 rounded uppercase font-roboto font-medium text-sm hover:bg-red-400"
        >
          Google
        </button>
      </div>
      <p className="mt-4 text-gray-600 text-center">
        Have an Account?
        <Link href="/signin" className="text-red-600">
          {" "}
          Sign In Now!
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
