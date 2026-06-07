import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { CircleUserRoundIcon, Search } from "lucide-react"; 

const links = [
  {
    id: "id1",
    title: "Home",
    target: "/",
  },
  {
    id: "id2",
    title: "Collections",
    target: "/Collections",
  },
  {
    id: "id3",
    title: "My List",
    target: "/Watchlist",
  },
  {
    id: "id4",
    title: "Directors",
    target: "/Directors",
  },
];

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed w-full left-0 top-0 z-50  bg-[#0A0A0A] text-white border-b border-white/10 ">
      {/* wrap */}
      <div className="grid grid-cols-3 items-center w-full max-w-360 mx-auto px-8 py-4  ">
        {/* logo */}
        <Link
          to={"/"}
          className=" justify-self-start font-poppins font-bold text-2xl tracking-tight uppercase"
        >
          Solium
        </Link>

        {/* links */}
        <nav className="justify-self-center">
          <ul className="flex items-center justify-center gap-8  ">
            {links.map((item) => (
              <li
                className=" font-poppins text-xs uppercase tracking-[0.2em]  transition-all duration-300 ease-out "
                key={item.id}
              >
                <NavLink
                  className={(e) => {
                    return e.isActive
                      ? "text-stone-50 transition-all duration-300 ease-out "
                      : "text-neutral-500 hover:text-stone-50 transition-all duration-300 ease-out ";
                  }}
                  to={item.target}
                >
                  {" "}
                  {item.title}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* icons */}
        <div className=" flex  items-center gap-6 justify-self-end    ">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full transition-all duration-500 cursor-pointer">
            <input
              type="text"
              placeholder="Search films...."
              className={`bg-transparent outline-none text-sm transition-all duration-500 ease-in-out ${isOpen ? "w-60 opacity-100 px-2" : "w-0 opacity-0"}`}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/60 hover:text-white transition-colors cursor-pointer p-2"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
          </div>
          <div className="text-white hover:scale-110 transition-all">
            <CircleUserRoundIcon size={26} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;