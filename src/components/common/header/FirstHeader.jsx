"use client";
import React from "react";
import Link from "next/link";
import NavbarBadges from "../ui/NavbarBadges";
import { BiChevronDown } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
const FirstHeader = () => {
  const router = useRouter();
  let pathName = usePathname();
  return (
    <div className=" w-full  lg:bg-white bg-tan  wrapper shadow-md shadow-slate-300 py-2">
      <div className=" py-4 between w-full ">
        <button
          onClick={() => {
            router.replace("/account");
          }}
        >
          <img
            src="/images/logo.svg"
            className=" md:w-[200px] w-[100px]"
            alt="logo"
            onClick={() => {
              router.replace("/");
            }}
          />
        </button>

        <div className="lg:flex items-center justify-between flex-grow pl-12 text-gray-600  hidden font-semibold">
          <div className="flex items-center  flex-grow space-x-6 capitalize ">
            <button
              onClick={() => {
                router.replace("/home");
              }}
              className={`${
                pathName === "/home"
                  ? " rounded-bl-xl rounded-tr-full border-2 p-1  px-2 pr-4 bg-gray-300 "
                  : "rounded-bl-xl rounded-tr-full border-2 bg-gray-200 p-1  px-2 pr-4"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                router.replace("/shop");
              }}
              className={`${
                pathName === "/shop"
                  ? "  rounded-bl-xl rounded-tr-full border-2 p-1  px-2 pr-4 bg-gray-300 "
                  : "rounded-bl-xl rounded-tr-full border-2 bg-gray-200 p-1  px-2 pr-4"
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => {
                router.replace("/about");
              }}
              className={`${
                pathName === "/about"
                  ? " rounded-bl-xl rounded-tr-full border-2 p-1  px-2 pr-4 bg-gray-300 "
                  : "rounded-bl-xl rounded-tr-full border-2 bg-gray-200 p-1  px-2 pr-4"
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                router.replace("/contact");
              }}
              className={`${
                pathName === "/contact"
                  ? " rounded-bl-xl rounded-tr-full border-2 p-1  px-2 pr-4 bg-gray-300 "
                  : "rounded-bl-xl rounded-tr-full border-2 bg-gray-200 p-1  px-2 pr-4"
              }`}
            >
              Contact
            </button>
            <div className="flex items-center">
              <p>Pages</p> <BiChevronDown />
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <NavbarBadges />
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
