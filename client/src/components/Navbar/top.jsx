import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircleUserRoundIcon, Search, SearchIcon } from "lucide-react";
import { Icon } from "@iconify/react";

const links = [
  {
    id: "id1",
    title: "Home",
    target: "/",
  },
  {
    id: "id2",
    title: "Catalog",
    target: "/",
  },
  {
    id: "id3",
    title: "Library",
    target: "/",
  },
  {
    id: "id4",
    title: "Directors",
    target: "/",
  },
];
const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50  bg-[#0A0A0A] text-white border-b border-white/10 ">
      {/* wrap */}

      <div className="flex justify-between items-center w-full max-w-360 mx-auto px-8 py-4  ">
        {/* logo */}
        <Link
          to={"/"}
          className="font-roboto-serif font-bold text-2xl tracking-tight uppercase"
        >
          Solium
        </Link>

        {/* links */}
        <nav>
          <ul className="flex items-center gap-8">
            {links.map((item) => (
              <li
                className=" font-roboto text-xs uppercase tracking-[0.2em] text-white/40 hover:text-stone-50 transition-all duration-300 ease-out "
                key={item.id}
              >
                <Link to={item.target}> {item.title} </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* icons */}
        <div className=" flex  items-center gap-6   ">
          <div
            
            className="flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 transition-all duration-500"
          >
            <input
              type="text"
              placeholder="Search films...."
              className={`bg-transparent outline-none text-sm transition-all duration-500 ease-in-out ${isOpen ? "w-40 opacity-100 px-2" : "w-0 opacity-0"}`}
            />
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/60 hover:text-white transition-colors cursor-pointer">
              <Search size={18} />
            </button>
          </div>
          <div className="text-white/60 hover:text-white hover:scale-110 transition-all">
            <Icon icon={"gg:profile"} width={24} className="text-white " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
