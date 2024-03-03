"use client";

import ProfileCard from "../../../components/card/ProfileCard";
import AccountSideBar from "../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../components/common/ui/CustomBreadcrumbs";
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" md:ml-8 text-gray-600 text-sm font-sans w-full md:mt-10">
      {/* <CustomBreadcrumbs
        links={[
          { linkName: "My Account", link: "/about" },
          { linkName: "Shipping Address", link: "/shippingaddress" },
        ]}
      /> */}
      <div className="grid grid-cols-12">
        {/* <div className=" lg:col-span-3 lg:block hidden">
          <AccountSideBar link="shipping address"/>
        </div> */}
        <div className="  col-span-full">
          <ProfileCard/>
          <h1 className="text-lg font-semibold mb-4">Shipping Address</h1>
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
