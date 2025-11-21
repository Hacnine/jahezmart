"use client";
import React from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
import dynamic from 'next/dynamic';

const NavbarBadges = dynamic(() => import('../ui/NavbarBadges'), { ssr: false });
const FirstHeader = () => {
  const router = useRouter();
  let pathName = usePathname();
  return (
    <div className=" w-full  lg:bg-white bg-tan  wrapper shadow-md shadow-slate-300 py-2">
      <div className=" py-4 between w-full ">
        <Link href="/">
          <img
            src="/images/logo.svg"
            className=" md:w-[200px] w-[100px] cursor-pointer"
            alt="logo"
          />
        </Link>

        <div className="lg:flex items-center justify-between flex-grow pl-12 text-gray-600  hidden font-semibold">
          <div className="flex items-center  flex-grow space-x-6 capitalize ">
            <Link
              href="/home"
              className={`${
                pathName === "/home"
                  ? " rounded-full border-2   px-3 bg-gray-300 "
                  : "rounded-full border-2 bg-gray-200   px-3"
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`${
                pathName === "/shop"
                  ? "  rounded-full border-2   px-3 bg-gray-300 "
                  : "rounded-full border-2 bg-gray-200   px-3"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`${
                pathName === "/about"
                  ? " rounded-full border-2   px-3 bg-gray-300 "
                  : "rounded-full border-2 bg-gray-200   px-3"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${
                pathName === "/contact"
                  ? " rounded-full border-2   px-3 bg-gray-300 "
                  : "rounded-full border-2 bg-gray-200   px-3"
              }`}
            >
              Contact
            </Link>
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
