import React from "react";
import { Link } from "react-router-dom";

const foooterLinks = [
  {
    id: "id1",
    title: "Home",
    link: "/",
  },
  {
    id: "id2",
    title: "Catalog",
    link: "/",
  },
  {
    id: "id3",
    title: "Form",
    link: "/",
  },
  //   {
  //     id: "id4",
  //     title: "",
  //     link: "/",
  //   },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
        <div className=" flex flex-col justify-center gap-12 items-center overflow-hidden p-16 md:p-24">

      <h2 className="tracking-[0.2em] border-b border-neutral-800 pb-2 text-2xl font-Playfair font-semibold text-center uppercase ">
        SOLIUM
      </h2>
      <div className="w-full flex flex-wrap gap-8 md:gap-16 justify-center ">
        {foooterLinks.map((item) => (
            <Link 
            key={item.id} 
            className=" font-poppins text-[11px] uppercase text-neutral-500 active:text-white hover:text-white transition-all duration-500 ease-in-out "
            to={item.link}
            >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="w-full  max-w-2xl border-t border-neutral-900 pt-8 mt-4">

      <p  className="text-[9px] text-center tracking-tight text-neutral-600 uppercase">© 2026 Solium Media. All rights reserved.</p>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
