import React from "react";
import AccountSideBar from "../../components/common/sidebar/AccountSideBar";
import CustomBreadcrumbs from "../../components/common/ui/CustomBreadcrumbs";
const Layout = ({links, link, children }) => {
    console.log(links)
  return (
    <div className="wrapper mt-8   pb-16 ">
      <CustomBreadcrumbs
        links={[{ linkName: "Account", link: "/account" }]}
      />
      {/* <!-- Side Bar --> */}
      <div className="gap-5 start">
        <div className="hidden lg:block">
          <AccountSideBar  />
        </div>{" "}
        {children}
      </div>
    </div>
  );
};

export default Layout;
