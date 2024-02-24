"use client";
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
    <div className="container mx-auto text-gray-600 text-sm">
      <CustomBreadcrumbs
        links={[
          { linkName: "My Account", link: "/account" },
          { linkName: "Change Password", link: "/changepassword" },
        ]}
      />
      <div className="grid grid-cols-12">
        <div className=" col-span-3">
          <AccountSideBar />
        </div>
        <div className="col-span-9 w-2/3 flex-col">
          <h1 className="text-lg font-semibold mb-4">Change Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block mb-1">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="retypePassword" className="block mb-1">
                Retype Password
              </label>
              <input
                type="password"
                id="retypePassword"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Repeat your password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className=" border border-orangeRed bg-orangeRed hover:bg-transparent text-white transition-colors  hover:text-orangeRed font-medium text-base px-4 py-2 rounded"
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
