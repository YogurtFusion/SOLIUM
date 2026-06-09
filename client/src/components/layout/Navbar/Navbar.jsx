import React from "react";
import TopNavbar from "./Topbar";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:block">
        <TopNavbar />
      </div>
      <div className="block lg:hidden ">
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
