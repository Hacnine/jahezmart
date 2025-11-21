"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "../../../components/card/ProfileCard";
import AccountSideBar from "../../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../../components/common/ui/CustomBreadcrumbs";
import { useGetProfileQuery, useUpdateProfileMutation } from "../../../store/api";

const PaymentsMethod = () => {
  const { data: profile, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [isDefault, setIsDefault] = useState(true);

  useEffect(() => {
    if (profile?.paymentMethod) {
      const pm = profile.paymentMethod;
      setCardNumber(pm.last4 ? `•••• •••• •••• ${pm.last4}` : "");
      setExpMonth(pm.expMonth || "");
      setExpYear(pm.expYear || "");
      setIsDefault(pm.isDefault ?? true);
    }
  }, [profile]);

  const handleSave = async (e) => {
    e.preventDefault();
    // Prepare a minimal paymentMethod object to persist.
    const paymentMethod = {
      brand: "card",
      last4: cardNumber.slice(-4),
      expMonth,
      expYear,
      isDefault,
    };

    try {
      await updateProfile({ paymentMethod }).unwrap();
      // Optionally show a success message or revalidate
      // For now, rely on RTK Query cache invalidation
      console.log("Payment method saved");
    } catch (err) {
      console.error("Failed to save payment method", err);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="md:ml-8 text-gray-600 text-base font-sans  md:mt-20 w-full pb-16  ">
      <div className="gap-5 start">
        <div className=" flex items-center  lg:justify-between flex-col lg:flex-row w-full gap-6">
          <div className=" w-full  gap-4  ">
            <ProfileCard />

            <div className="bg-white rounded-lg shadow-lg p-6 mt-4 max-w-md">
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="•••• •••• •••• 1234"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Exp Month</label>
                    <input
                      type="text"
                      value={expMonth}
                      onChange={(e) => setExpMonth(e.target.value)}
                      placeholder="MM"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">Exp Year</label>
                    <input
                      type="text"
                      value={expYear}
                      onChange={(e) => setExpYear(e.target.value)}
                      placeholder="YY"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="default"
                    type="checkbox"
                    checked={isDefault}
                    onChange={(e) => setIsDefault(e.target.checked)}
                  />
                  <label htmlFor="default" className="text-sm">Set as default</label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isUpdating}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  >
                    {isUpdating ? "Saving..." : "Save Payment Method"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsMethod;
