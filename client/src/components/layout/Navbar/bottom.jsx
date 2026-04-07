import React from "react";
import { Link } from "react-router";
import { Home, SearchIcon, SquareUserRoundIcon } from "lucide-react";
import { Search } from "lucide-react";
import { SquareLibraryIcon } from "lucide-react";
import { CircleUserRoundIcon } from "lucide-react";
const BottomNavbar = () => {
  const links = [
    {
      id: "id1",
      icon: <Home />,
    },
    {
      id: "id2",
      icon: <SearchIcon />,
      link: "/"
    },
    {
      id: "id3",
      icon: <SquareLibraryIcon />,
      link: "/"
    },
    {
      id: "id4",
      icon: <CircleUserRoundIcon />,
      link: "/"
    },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50  w-full  px-8 py-4 bg-stone-900 text-white border-t border-white/10 ">
      <div className=" flex justify-between items-center  mx-auto w-[90%]">
        {links.map((item) => (
          <Link key={item.id} to={item.link} className="">
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default BottomNavbar;
