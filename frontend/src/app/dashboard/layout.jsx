"use client";
import Head from "next/head";
import React,{ useState } from "react";
const DashboardLayout = ({ children, revenue, notification, login }) => {
  const [isLogin, setIslogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <div className=" text-rose-700 center w-full flex-col">
          You are Logged in!!!
          {children}
          <div className="text-orange-600">{revenue}</div>
          <div className=" text-lime-800">{notification}</div>
        </div>
      ) : (
        <div className="  text-neutral-600 text-center w-full">{login}</div>
      )}
    </>
  );
};

export default DashboardLayout;

// Reactjs code snippets
// ES7 React/Redux/GraphQL/React-Native snippets,
// React/Redux/react-router Snippets
// Nextjs snippets
