import React from "react";
import TopNavbar from "./Topbar";
import Sidebar from "./Sidebar";

const Navbar=()=>{
    return(
        <>
        <div className="hidden md:block">
        <TopNavbar/> 
        </div>
        <div className="md:hidden ">
       <Sidebar/>
        </div>
        </>
    )
}

export default Navbar