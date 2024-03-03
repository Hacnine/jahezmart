import AccountInfoCard from "../../../components/card/AccountInfoCard";
import ProfileCard from "../../../components/card/ProfileCard";
import AccountSideBar from "../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../components/common/ui/CustomBreadcrumbs";
import React from "react";

const ManageAccount = () => {
  return (
    <>
      <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
        <div className=" w-full lg:w-1/3 gap-4  ">
          <ProfileCard />
          <AccountInfoCard
            title="Profile"
            name="Abdullah"
            email="yourmail@mail.com"
            mobileNumber={1738844893}
            link="profile"
          />
        </div>

        <div className="w-full lg:w-1/3  gap-4  ">
          <AccountInfoCard
            title="Shipping Address"
            name="Abdullah"
            address="Khulana,Shatgumbuj Mosque@mail.com"
            link="shippingaddress"
          />
        </div>

        <div className=" w-full lg:w-1/3  gap-4  ">
          <AccountInfoCard
            title="Billing Address"
            name="Abdullah"
            address="Khulana,Shatgumbuj Mosque@mail.com"
            link="billingaddress"
          />
        </div>
      </div>
    </>
  );
};

export default ManageAccount;
