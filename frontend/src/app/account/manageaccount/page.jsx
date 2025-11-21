"use client";

import AccountInfoCard from "../../../components/card/AccountInfoCard";
import ProfileCard from "../../../components/card/ProfileCard";
import AccountSideBar from "../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../components/common/ui/CustomBreadcrumbs";
import React from "react";
import { useGetProfileQuery } from "../../../store/api";

const ManageAccount = () => {
  const { data: profile, isLoading } = useGetProfileQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const user = profile || {};

  return (
    <>
      <div className=" md:mt-12 md:ml-8 flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
        <div className=" w-full lg:w-1/3 gap-4  ">
          <ProfileCard />
          <AccountInfoCard
            title="Profile"
            name={user.name || 'N/A'}
            email={user.email || 'N/A'}
            mobileNumber={user.phoneNumber || 'N/A'}
            link="profile"
          />
        </div>

        <div className="w-full lg:w-1/3  gap-4  ">
          <AccountInfoCard
            title="Shipping Address"
            name={user.name || 'N/A'}
            address={user.shippingAddress || 'N/A'}
            link="shippingaddress"
          />
        </div>

        <div className=" w-full lg:w-1/3  gap-4  ">
          <AccountInfoCard
            title="Billing Address"
            name={user.name || 'N/A'}
            address={user.billingAddress || 'N/A'}
            link="billingaddress"
          />
        </div>
      </div>
    </>
  );
};

export default ManageAccount;
