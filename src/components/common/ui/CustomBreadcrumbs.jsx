"use client";
import { Home } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CustomBreadcrumbs = ({ links, textColor }) => {
  // [{ linkName: "Account", link: "/account" }]
  const link = usePathname();
  // Step 1: Split the string
  const parts = link.split("/");

  // Step 2: Create an array of objects
  const linkArray = [];
  for (let i = 1; i < parts.length; i++) {
    linkArray.push({
      linkName: parts[i],
      link: `/${parts.slice(1, i + 1).join("/")}`,
    });
  }

  return (
    <div className="my-8   border-orangeRed border-l-0 w-fit py-2 rounded-lr-full rounded-tr-full">
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{ color: textColor ? "white" : "#aa4400" }}
        className="flex items-center"
      >
        <Link color="inherit" href="/">
          <Home />
        </Link>

        {linkArray.map((linkItem) => (
          <Link key={linkItem.link} href={linkItem.link} className="capitalize text-sm font-semibold">
            {linkItem.linkName}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
