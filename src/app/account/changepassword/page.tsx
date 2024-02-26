"use client";
import ProfileCard from "@/components/card/ProfileCard";
import AccountSideBar from "@/components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
import React, { useState } from "react";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic here to handle password change
  };

  return (
    <div className=" wrapper  text-gray-600 text-sm">
      <CustomBreadcrumbs
        links={[
          { linkName: "My Account", link: "/account" },
          { linkName: "Change Password", link: "/changepassword" },
        ]}
      />
      <div className="start md:flex-row flex-col gap-4 w-full ">
        <div className="hidden  lg:block w-[23%] mr-4 ">
          <AccountSideBar link="changepassword"/>
        </div>
        <div className="lg:w-[70%] w-full">
          <ProfileCard/>

          <h1 className="text-lg font-semibold mb-4">Change Password</h1>
          <form onSubmit={handleSubmit}>
          <div className=" w-full center lg:flex-row flex-col gap-3">

          <div className="mb-4 w-full lg:w-1/2">
              <label htmlFor="currentPassword" className="block mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="input"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full lg:w-1/2">
              <label htmlFor="newPassword" className="block mb-1">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="input"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
            <div className="mb-4">
              <label htmlFor="retypePassword" className="block mb-1">
                Retype Password
              </label>
              <input
                type="password"
                id="retypePassword"
                className="input"
                placeholder="Repeat your password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className=" col-start-7 col-span-1 border border-orangeRed bg-orangeRed hover:bg-transparent text-white transition-colors  hover:text-orangeRed font-medium text-sm px-4 py-2 rounded"
            >
              SAVE CHANGES
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
