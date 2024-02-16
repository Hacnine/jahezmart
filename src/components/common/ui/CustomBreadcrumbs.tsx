import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import React from "react";

interface Link {
  linkName: string;
  link: string;
}

interface CustomBreadcrumbsProps {
  links: Link[];
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({ links }) => {
  return (
    <div className="my-8 border-2  border-orangeRed border-l-0 w-fit py-2 px-3 rounded-r-full">
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{ color: "#aa4400" }}
      >
        <Link color="inherit" href="/">
          {/* <Home sx={{ mr: 0.5 }} fontSize="inherit" /> */}
          Home
        </Link>

        {links.map((linkItem) => (
          <Link key={linkItem.link} href={linkItem.link}>
            {linkItem.linkName}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
