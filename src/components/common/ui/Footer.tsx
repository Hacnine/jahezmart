import {
  Call,
  Email,
  Facebook,
  Google,
  Place,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { MY_ACCOUNT, CONTACT, INFORMATION } from "@/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" pt-14 " style={{ background: "#28170bff" }}>
      {/* flex items-start lg:justify-between lg:flex-row min-md:flex-col flex-col */}
      <div className="text-zinc-300 px-10 py-5  start flex-col lg:flex-row gap-[70px] ">
        <div className="w-fit">
          <div className=" mb-4 font-semibold">
            <img src="/images/logo.svg" alt="" />
            <p className="pt-2">Let's Decorate Your Dream.</p>
          </div>

          <p className=" font-semibold text-xl mb-2">NEWSLETTER</p>
          <div className="start">
            <input
              type="text"
              className="md:w-[260px] w-[190px] border border-gray-300   h-[48px]  border-r-0  px-4 py-3 ring-transparent  outline-none focus:border focus:border-orangeRed focus:border-r-0 rounded-lr-md rounded-tl-3xl"
            />
            <button className="bg-orangeRed hover:bg-sandyBrown text-white center gap-1 py-3 sm:px-5 px-2 rounded-lr-md rounded-tr-3xl font-semibold sm:text-base ">
              Subscribe{" "}
            </button>
          </div>
        </div>

        {/* <div className="center lg:gap-28 gap-20"> */}
        <div className="md:gap-[50px] gap-1 grid  md:grid-cols-3 sm:grid-cols-3 ">
          <div className=" col-span-1  mr-[60px] w-[130px]">
            <h2 className="text-lg font-semibold mb-4">ACCOUNT</h2>
            <ul>
              {MY_ACCOUNT.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link href={item.link} className="font-sans">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1  ">
            <h2 className="text-lg font-semibold mb-4">INFORMATION</h2>
            <ul>
              {INFORMATION.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link href={item.link} className="font-sans">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* </div> */}

          <div className="sm:col-span-1 col-span-3">
            <h2 className="text-lg font-semibold mb-4">CONTACT </h2>

              <div className="start gap-2 font-sans">
                <Place />{" "}
                <p className="mb-2">
                  Khulana,Shatgumbuj Mosque
                </p>
              </div>

              <div className="start gap-2 font-sans">
                <Call />
                <p className="mb-2">+566 477 256 +566 254 575</p>
              </div>

              <div className="start gap-2 font-sans">
                <Email />
                <p className="mb-2">info@domain.com</p>
              </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex justify-center p-16 text-white">
        <div className="">
          <div className="flex justify-center gap-3">
            <Twitter
              className="ring-2 ring-white rounded-full p-2"
              fontSize="large"
            />
            <Google
              className="ring-2 ring-white rounded-full p-2"
              fontSize="large"
            />
            <Facebook
              className="ring-2 ring-white rounded-full p-2"
              fontSize="large"
            />
          </div>

          <p className=" font-sans pt-3">© Copy All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
