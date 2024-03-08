"use client";
import { Home } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const CustomBreadcrumbs = ({ links, textColor }) => {

const router = useRouter();

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
        sx={{ color: textColor ? "white" : "#28170bff" }}
        className="flex items-center cursor-pointer"
      >
        <div onClick={()=>router.replace('/')}>
          <Home />
        </div>

        {linkArray.map((linkItem) => (
          <div key={linkItem.link} onClick={()=>router.replace(`${linkItem.link}`)} className="capitalize text-sm font-semibold">
            {linkItem.linkName}
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
