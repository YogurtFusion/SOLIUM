import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "../assets/icons/Linkedin.svg";
import Mail from "../assets/icons/mail.svg";
import Twitter from "../assets/icons/twitter.svg";
import Insta from "../assets/icons/insta.svg";

const Footer = () => {
  return (
    <footer className="  mt-36 pt-12 pb-16 border-t border-[0.5]  border-[#FEF3E2]">
      <div className=" max-w-6xl mx-auto flex justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold">SOLIUM</h1>
        </div>
        <div className="social-media">
          <ul className="text-[#FEF3E2] flex flex-col gap-4 justify-center text-center items-center  text-xl ">
            <li className="leading-normal tracking-wider font-semibold">
              Social Links
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img
                  className=" social-links-icons h-8 w-8  hover:opacity-80 focus-visible:outline"
                  src={Twitter}
                  alt="twitter icon"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Insta"
              >
                <img
                  className=" social-links-icons h-8 w-8  hover:opacity-80 focus-visible:outline"
                  src={Insta}
                  alt="Insta icon"
                />
              </a>
            </li>

            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mail"
              >
                <img
                  className=" social-links-icons h-8 w-8  hover:opacity-80 focus-visible:outline"
                  src={Mail}
                  alt="Mail icon"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <img
                  className=" social-links-icons h-8 w-8  hover:opacity-80 focus-visible:outline"
                  src={Linkedin}
                  alt="Linkedin incon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <ul className="text-[#FEF3E2]  flex flex-col gap-4 justify-center text-center items-center text-xl ">
            <li className=" leading-normal tracking-wider font-semibold">
              Quick Links
            </li>
            <li className=" hover:border-[#FEF3E2] border-b border-transparent leading-normal tracking-wider font-light">
              <Link to="#"> About</Link>
            </li>
            <li className=" hover:border-[#FEF3E2] border-b border-transparent leading-normal tracking-wider font-light">
              <Link to="#"> Contact</Link>
            </li>
            <li className=" hover:border-[#FEF3E2] border-b border-transparent leading-normal tracking-wider font-light">
              <Link to="#"> Terms</Link>
            </li>
            <li className=" hover:border-[#FEF3E2] border-b border-transparent leading-normal tracking-wider font-light">
              <Link to="#"> Submit Film</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right w-full h-auto text-amber-50 font-light text-center mt-12 pt-6 border-white/20 leading-normal tracking-wider ">
        © 2025 SOLIM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
