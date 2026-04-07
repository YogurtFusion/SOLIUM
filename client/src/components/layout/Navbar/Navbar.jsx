import React from "react";
import BottomNavbar from "./bottom";
import TopNavbar from "./top";

const Navbar=()=>{
    return(
        <>
        <div className="hidden md:block">
        <TopNavbar/> 
        </div>
        <div className="md:hidden ">
        <BottomNavbar/>
        </div>
        </>
    )
}

export default Navbar