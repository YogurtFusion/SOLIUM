import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../assets/icons/profile.svg";
const Navbar = () => {
  return (
    <nav className="flex  justify-between items-center px-6 py-3 bg-[#121212] border-b-2 border-b-[#2A2A2A] text-[#FEF3E2] " >
      <div className="logo">
        <h1>SOLIUM</h1>
      </div>

      <ul className="flex justify-between items-center gap-2" >
        <li className="hover:underline" >
          <Link>Home</Link>
        </li>
        <li className="hover:underline" >
          <Link>Library</Link>
        </li>
        <li className="hover:underline" >
          <Link>Genre</Link>
        </li>
        <div className="profile-svg">
          <img src={profileIcon} alt="profileIcon" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
