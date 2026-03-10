import React from "react";
import { Link } from "react-router-dom";
import { Home, SearchIcon, SquareUserRoundIcon} from "lucide-react";
import { Search} from "lucide-react";
import { SquareLibraryIcon} from "lucide-react";
import { CircleUserRoundIcon} from "lucide-react";
const BottomNavbar = () => {

    const links =[
        {
            id: "id1",
            icon: <Home/>
        },
        {
            id: "id2",
            icon: <SearchIcon/>
        },
        {
            id: "id3",
            icon: <SquareLibraryIcon/>
        },
        {
            id: "id4",
            icon: <CircleUserRoundIcon/>
        },

    ]

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50  w-full  px-8 py-4 bg-black text-amber-50  ">
        <div  className=" flex justify-between items-center  mx-auto w-[90%]">
      {links.map((item)=>(

          <Link key={item} to={"/"} className=" ">
          {item.icon}
        </Link>
      ))}
      </div>
    </nav>
  );
};
export default BottomNavbar;
