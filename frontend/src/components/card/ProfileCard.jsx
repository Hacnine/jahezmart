"use client";
import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import AccountDrawer from "../Drawer/DynamicDrawer";
import AccountSideBar from "../common/sidebar/AccountSideBar";

const ProfileCard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="px-4 py-3 mb-4 bg-white lg:hidden  flex items-center justify-between  w-full gap-4  rounded-md shadow-md shadow-gray-300">
        <div>
          <div className="flex-shrink-0">
            <img
              src="/images/BeardManProfile.svg"
              className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
            />
          </div>

          <div className="flex-grow ">
            <p className="text-gray-800 font-medium">Abdullah</p>
          </div>
        </div>

        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>
      <AccountDrawer open={open} setOpen={setOpen} Component={AccountSideBar} />
    </>
  );
};

export default ProfileCard;
