import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const links = [
  {
    id: "id1",
    icon: "home",
    title: "Home",
    target: "/",
  },
  {
    id: "id2",
    icon: "search",
    title: "Browse",
    target: "/Browse",
  },
  {
    id: "id3",
    icon: "bookmark",
    title: "My List",
    target: "/Watchlist",
  },
  {
    id: "id4",
    icon: "contacts_product",
    title: "Directors",
    target: "/Directors",
  },
  {
    id: "id5",
    icon: "account_circle",
    title: "Profile",
    target: "/Profile",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" fixed top-0 z-50 w-full border-b border-foreground/40 ">
      <div className="bg-black/80 backdrop-blur-lg py-5 px-6 grid grid-cols-2 w-full max-w-7xl mx-auto items-center">
        {/* logo */}
        <Link
          to={"/"}
          className=" justify-self-start font-poppins font-bold text-xl tracking-widest uppercase  text-foreground"
        >
          Solium
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className={`justify-self-end  text-foreground text-3xl cursor-pointer  ${isOpen ? "invisible" : "visible"} `}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <nav
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 z-50 h-full w-[75vw] max-w-sm  bg-black/85  backdrop-blur-md border-l border-border/30 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col  items-end  px-8 pt-6 shadow-2xl text-foreground `}
      >
        <div className="flex justify-end w-full mb-12">
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex flex-col items-start w-full gap-6">
          {links.map((item) => (
            <NavLink
              key={item.id}
              to={item.target}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 py-4 w-full border-b border-border transition-all duration-300 ${isActive ? "text-foreground font-medium pl-2 border-foreground" : "text-foreground/60 active:text-foreground/80 "}`
              }
            ><span className="material-symbols-outlined text-base">
                {item.icon}
              </span>
              <span className="font-poppins uppercase tracking-widest text-lg">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity "
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
