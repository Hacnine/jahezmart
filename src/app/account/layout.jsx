import React from "react";
import AccountSideBar from "../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../components/common/ui/CustomBreadcrumbs";
const Layout = ({ links, link, children }) => {
  return (
    <div className="wrapper mt-8   pb-16 flex items-start w-full gap-5 ">
      <div className="hidden lg:block w-fit">
        <CustomBreadcrumbs/>
        <AccountSideBar/>
      </div>

      {children}
    </div>
  );
};

export default Layout;
