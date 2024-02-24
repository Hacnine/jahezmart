"use client";

import AccountSideBar from "@/components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "@/components/common/ui/CustomBreadcrumbs";
import React, { useState } from "react";

const AddressForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");

  const countries = ["Country A", "Country B", "Country C"]; // Example list of countries
  const regions = ["Region A", "Region B", "Region C"]; // Example list of regions
  const cities = ["City A", "City B", "City C"]; // Example list of cities
  const areas = ["Area A", "Area B", "Area C"]; // Example list of areas

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto text-gray-600">
      <CustomBreadcrumbs
        links={[
          { linkName: "My Account", link: "/about" },
          { linkName: "Manage Address", link: "/address" },
        ]}
      />
      <div className="grid grid-cols-12">
        <div className=" col-span-3">
          <AccountSideBar />
        </div>
        <div className="col-span-9">
          <h1 className="text-lg font-semibold mb-4">Manage Address</h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4 text-sm"
          >
            <div>
              <label htmlFor="fullName" className="block mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
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
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
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
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
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
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
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
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
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
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
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
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className=" border border-orangeRed bg-orangeRed hover:bg-transparent text-white transition-colors  hover:text-orangeRed font-medium text-base px-4 py-2 rounded"
              >
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
