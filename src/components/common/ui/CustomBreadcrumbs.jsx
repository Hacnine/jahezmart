import { Home } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import React from "react";



const CustomBreadcrumbs = ({
  links,
  textColor,
}) => {
  return (
    <div className="my-8   border-orangeRed border-l-0 w-fit py-2 px-3 rounded-r-full">
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{ color: textColor ? "white" : "#aa4400" }}
      >
        <Link color="inherit" href="/">
          <Home />
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
