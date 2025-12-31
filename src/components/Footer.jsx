import React from "react";
import Linkedin from "../assets/icons/Linkedin.svg";
import Mail from "../assets/icons/mail.svg";
import Twitter from "../assets/icons/twitter.svg";
import Insta from "../assets/icons/insta.svg";

const Footer = () => {
  return (
    <footer className=" mt-36 border-t border-[0.5]  border-[#FEF3E2] pt-4" >
        <div className="wrap flex justify-around">

      <div className="logo">
        <h1>SOLIUM</h1>
      </div>
      <div className="social-media">
       <ul className="text-[#FEF3E2] flex flex-col gap-4 justify-center text-center items-center  text-xl " >
            <li className="leading-normal tracking-wider font-semibold" >Social Medias</li>
        <img className="h-8 w-8  hover:opacity-80 focus-visible:outline" src={Twitter} alt="" />
        <img className="h-8 w-8  hover:opacity-80 focus-visible:outline" src={Insta} alt="" />
        <img className="h-8 w-8  hover:opacity-80 focus-visible:outline" src={Mail} alt="" />
        <img className="h-8 w-8  hover:opacity-80 focus-visible:outline" src={Linkedin} alt="" />
        </ul>
      </div>
      <div className="quick-links">
        <ul className="text-[#FEF3E2]  flex flex-col gap-4 justify-center text-center items-center text-xl " >
            <li className=" leading-normal tracking-wider font-semibold" >Quick Links</li>
            <li className=" hover:border-[#FEF3E2] border-b border-transparent leading-normal tracking-wider font-light" ><a href="#">About</a></li>
            <li className=" hover:border-[#FEF3E2] border-b border-transparent leading-normal tracking-wider font-light" ><a href="#">Contact</a></li>
            <li className=" hover:border-[#FEF3E2] border-b border-transparent leading-normal tracking-wider font-light" ><a href="#">Terms</a></li>
            <li className=" hover:border-[#FEF3E2] border-b border-transparent leading-normal tracking-wider font-light" ><a href="#">Submit Film</a></li>
        </ul>

      </div>
        </div>
      <div className="copy-right w-full h-auto text-amber-50 font-light text-center pt-16 leading-normal tracking-wider ">
        © 2025 SOLIM. All rights reserved.

      </div>
    </footer>
  );
};

export default Footer;
