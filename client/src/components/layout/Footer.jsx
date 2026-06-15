import React from "react";
import TransitionLink from "../UI/TransitionLink";
const foooterLinks = [
  {
    id: "id1",
    title: "Home",
    target: "/",
  },
  {
    id: "id2",
    title: "Collections",
    target: "/collection",
  },
  {
    id: "id3",
    title: "Form",
    target: "/#form",
  },
  // {
  //   id: "id4",
  //   title: "Collections",
  //   target: "/collection",
  // },
  // {
  //   id: "id5",
  //   title: "My List",
  //   target: "/Watchlist",
  // },
  // {
  //   id: "id6",
  //   title: "Directors",
  //   target: "/Directors",
  // },
  {
    id: "id7",
    title: "About",
    target: "/about",
  },
  {
    id: "id8",
    title: "Contact Us",
    target: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white selection:bg-white selection:text-black">
      <div className=" flex flex-col justify-center gap-12 items-center overflow-hidden p-16 md:p-24">
        <TransitionLink to={"/"}>
          <h2 className="tracking-[0.2em] border-b border-neutral-800 pb-2 text-2xl font-Playfair font-semibold text-center uppercase ">
            SOLIUM
          </h2>
        </TransitionLink>
        <div className="w-full flex flex-wrap gap-8 md:gap-16 justify-center ">
          {foooterLinks.map((item) => (
            <TransitionLink
              key={item.id}
              className=" font-poppins text-[11px] uppercase text-neutral-500 active:text-white hover:text-white transition-all duration-500 ease-in-out "
              to={item.target}
            >
              {item.title}
            </TransitionLink>
          ))}
        </div>
        <div className="w-full  max-w-2xl border-t border-neutral-900 pt-8 mt-4">
          <p className="text-[9px] text-center tracking-tight text-neutral-100 uppercase">
            © 2026 Solium Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
