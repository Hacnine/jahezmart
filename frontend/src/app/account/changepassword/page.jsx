"use client";
import ProfileCard from "../../../components/card/ProfileCard";
import AccountSideBar from "../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../components/common/ui/CustomBreadcrumbs";
import React, { useState } from "react";
import { useChangePasswordMutation } from "../../../store/api";

const ChangePasswordForm = () => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== retypePassword) {
      alert("New passwords do not match!");
      return;
    }
    try {
      await changePassword({
        currentPassword,
        newPassword,
      }).unwrap();
      alert("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setRetypePassword("");
    } catch (error) {
      console.error("Failed to change password:", error);
      alert("Failed to change password. Please check your current password.");
    }
  };

  return (
      
      <div className=" md:mt-10 md:ml-8 start md:flex-row flex-col gap-4 w-full text-gray-600 text-base font-sans">
        
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
              disabled={isLoading}
              className=" col-start-7 col-span-1 border border-orangeRed bg-orangeRed hover:bg-transparent text-white transition-colors  hover:text-orangeRed font-medium text-sm px-4 py-2 rounded"
            >
              {isLoading ? "Changing..." : "SAVE CHANGES"}
            </button>{" "}
          </form>
        </div>
      </div>
  );
};

export default ChangePasswordForm;
