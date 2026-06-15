import {
  Search,
  X,
  MonitorPlay,
  Ticket,
  Compass,
  LayoutGrid,
  Bookmark,
  Clapperboard,
  UserCircle2,
  Menu,
} from "lucide-react";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import TransitionLink from "../../UI/TransitionLink";

const TransitionLinks = [
  {
    id: "id1",
    title: "Home",
    target: "/",
    icon: MonitorPlay, // CHANGED: Added icon component reference
  },
  {
    id: "id2",
    title: "Collections",
    target: "/collection",
    icon: LayoutGrid, // CHANGED: Added icon component reference
  },

  // {
  //   id: "id3",
  //   title: "Collections",
  //   target: "/collection",
  // },
  // {
  //   id: "id4",
  //   title: "My List",
  //   target: "/Watchlist",
  // },
  // {
  //   id: "id5",
  //   title: "Directors",
  //   target: "/Directors",
  // },
 
  {
    id: "id6",
    title: "About",
    target: "/about",
    icon: Compass, // CHANGED: Added icon component reference
  },
  {
    id: "id7",
    title: "Contact Us",
    target: "/contact",
    icon: UserCircle2, // CHANGED: Added icon component reference
  },

];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=" fixed top-0 z-50 w-full border-b border-border ">
      <div className="bg-black/80 backdrop-blur-lg py-5 px-6 grid grid-cols-2 w-full max-w-7xl mx-auto items-center">
        {/* logo */}
        <TransitionLink
          to={"/"}
          className=" justify-self-start font-poppins font-bold text-xl tracking-widest uppercase text-foreground"
        >
          Solium
        </TransitionLink>
        <div className="justify-self-end">
          <button
            className="text-foreground pr-6 cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={24} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className={`text-foreground cursor-pointer ${isOpen ? "invisible" : "visible"}`}
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <nav
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 z-50 h-full w-[75vw] max-w-sm bg-black/85 backdrop-blur-md border-l border-border/30 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-end px-8 pt-6 shadow-2xl text-foreground`}
      >
        <div className="flex justify-end w-full mb-12">
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <X
              size={28}
              strokeWidth={1.5}
              className="text-foreground/80 hover:text-foreground transition-colors"
            />
          </button>
        </div>
        <div className="flex flex-col items-start w-full gap-6">
          {TransitionLinks.map((item) => {
            const IconComponent = item.icon;
            return (
              <TransitionLink
                key={item.id}
                to={item.target}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 py-4 w-full border-b border-border transition-all duration-300 ${isActive ? "text-foreground font-medium pl-2 border-foreground" : "text-foreground/60 active:text-foreground/80"}`
                }
              >
                <span className="flex items-center justify-center">
                  <IconComponent size={22} strokeWidth={1.5} />
                </span>
                <span className="font-poppins uppercase tracking-widest text-lg">
                  {item.title}
                </span>
              </TransitionLink>
            );
          })}
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transform-gpu transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`absolute top-0 bg-black w-full h-full flex justify-between items-center px-8 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 transition-all ${isSearchOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}`}
      >
        <form 
        onSubmit={(e)=>{
          e.preventDefault()
          const query = e.target.searchQuery.value.trim()
          if(query){
            navigate(`/search?q=${query}`)
            setIsSearchOpen(false)
            e.target.reset()
          }
        }}
        className="w-full flex items-center text-foreground gap-3">
          <button type="submit" className="cursor-pointer">
            <Search
              size={20}
              strokeWidth={1.5}
              className="text-foreground/80"
            />
          </button>
          <input
          name="searchQuery"
            type="text"
            className="w-full border-b border-border text-foreground outline-none bg-transparent focus:border-foreground pl-1 text-lg font-poppins tracking-wide"
            placeholder="Search films, directors, moods..."
            autoFocus={isSearchOpen}
           
          />
        </form>
        <button
          onClick={() => {
            setIsSearchOpen(false);
          }}
          className="text-foreground/80 hover:text-foreground transition-colors ml-4 cursor-pointer"
        >
          <X size={26} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
