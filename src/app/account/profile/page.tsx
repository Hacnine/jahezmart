"use client"

import AccountSideBar from '@/components/common/sidebar/AccountSideBar';
import CustomBreadcrumbs from '@/components/common/ui/CustomBreadcrumbs';
import React, { useState } from 'react';

const ProfileForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic here to save changes
  };

  return (



    <div className="container mx-auto text-gray-600">
    <CustomBreadcrumbs
      links={[
        { linkName: "My Account", link: "/about" },
        { linkName: "Profile Information", link: "/profile" },
      ]}
    />
    <div className="grid grid-cols-12">
      <div className=" col-span-3">
        <AccountSideBar />
      </div>
      <div className="col-span-9">
        <h1 className="text-lg font-semibold mb-4">Manage Address</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <label htmlFor="firstName" className="block mb-1">First Name</label>
          <input type="text" id="firstName" className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1">Last Name</label>
          <input type="text" id="lastName" className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="birthday" className="block mb-1">Birthday</label>
          <input type="date" id="birthday" className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
        </div>
        <div>
          <label htmlFor="gender" className="block mb-1">Gender</label>
          <select id="gender" className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email Address</label>
          <input type="email" id="email" className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
          <input type="text" id="phoneNumber" className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="col-span-2">
          <button type="submit" className=" border border-orangeRed bg-orangeRed hover:bg-transparent text-white transition-colors  hover:text-orangeRed font-medium text-base px-4 py-2 rounded">SAVE CHANGES</button>
        </div>
      </form>
      </div>
    </div>
  </div>
   
  );
};

export default ProfileForm;
