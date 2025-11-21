"use client";

import ProfileCard from "../../../components/card/ProfileCard";
import AccountSideBar from "../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../components/common/ui/CustomBreadcrumbs";
import React, { useState, useEffect } from "react";
import { useGetProfileQuery, useUpdateProfileMutation } from "../../../store/api";

const AddressForm = () => {
  const { data: profile, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");

  const countries = ["Bangladesh", "India", "Pakistan", "USA"];
  const regions = ["Dhaka", "Chittagong", "Khulna", "Rajshahi"];
  const cities = ["Dhaka", "Chittagong", "Khulna", "Rajshahi"];
  const areas = ["Mirpur", "Gulshan", "Banani", "Uttara"];

  useEffect(() => {
    if (profile?.shippingAddress) {
      const addr = profile.shippingAddress;
      setAddress(addr);
    }
    if (profile?.phoneNumber) {
      setPhoneNumber(profile.phoneNumber);
    }
    if (profile?.name) {
      setFullName(profile.name);
    }
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const shippingAddress = `${fullName}, ${phoneNumber}, ${country}, ${region}, ${city}, ${area}, ${address}`;
      await updateProfile({ shippingAddress }).unwrap();
      alert("Shipping address updated successfully!");
    } catch (error) {
      console.error("Failed to update shipping address:", error);
      alert("Failed to update shipping address. Please try again.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:ml-8 text-gray-600 text-base font-sans md:mt-20 w-full pb-16">
      <div className="gap-5 start">
        <div className="flex items-center lg:justify-between flex-col lg:flex-row w-full gap-6">
          <div className="w-full gap-4">
            <ProfileCard />
            <div className="shadow-md shadow-gray-300 rounded px-4 p-5">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                  <div>
                    <label htmlFor="country" className="block mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      className="input"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Select Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="region" className="block mb-1">
                      Region
                    </label>
                    <select
                      id="region"
                      className="input"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    >
                      <option value="">Select Region</option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="city" className="block mb-1">
                      City
                    </label>
                    <select
                      id="city"
                      className="input"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Select City</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="area" className="block mb-1">
                      Area
                    </label>
                    <select
                      id="area"
                      className="input"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    >
                      <option value="">Select Area</option>
                      {areas.map((area, index) => (
                        <option key={index} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="address" className="block mb-1">
                      Address
                    </label>
                    <textarea
                      id="address"
                      className="input"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
