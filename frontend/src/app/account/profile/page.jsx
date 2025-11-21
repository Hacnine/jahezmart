"use client";

import ProfileCard from "../../../components/card/ProfileCard";
import React, { useState, useEffect } from "react";
import { useGetProfileQuery, useUpdateProfileMutation } from "../../../store/api";

const ProfileForm = ({params}) => {
  const { data: profile, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName || "");
      setLastName(profile.lastName || "");
      setBirthday(profile.birthday ? profile.birthday.split('T')[0] : "");
      setGender(profile.gender || "");
      setEmail(profile.email || "");
      setPhoneNumber(profile.phoneNumber || "");
    }
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({
        firstName,
        lastName,
        birthday: birthday ? new Date(birthday) : null,
        gender,
        email,
        phoneNumber,
      }).unwrap();
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" md:ml-8 text-gray-600 text-base font-sans mb-10 w-full md:mt-10">
      
      <div className="grid grid-cols-12">
      
        <div className="  col-span-full">
         <ProfileCard />

          <h1 className="text-lg font-semibold mb-4 ">Profile Info</h1>
          <form
            onSubmit={handleSubmit}
            className=" w-full grid grid-cols-2 gap-4 text-sm "
          >
            <div>
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="birthday" className="block mb-1">
                Birth Date
              </label>
              <input
                type="date"
                id="birthday"
                className="input"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="gender" className="block mb-1">
                Gender
              </label>
              <select
                id="gender"
                className="input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                disabled={isUpdating}
                className=" border border-orangeRed bg-orangeRed hover:bg-transparent text-white transition-colors  hover:text-orangeRed font-medium text-sm px-4 py-2 rounded"
              >
                {isUpdating ? "Saving..." : "SAVE CHANGES"}
              </button>
            </div>
          </form>
        </div>
      </div>


    </div>
  );
};

export default ProfileForm;
