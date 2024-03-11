"use client";
import React from "react";

const ErrorBoundary = ({ error, reset }) => {
  return (
    <div className=" w-screen h-screen center flex-col gap-4 wrapper">
      {error.message}{" "}
      <button className=" bg-colorRed py-2 px-4 rounded-md text-white" ocClick={reset}>
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;

