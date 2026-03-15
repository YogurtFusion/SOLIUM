import React from "react";
import { Icon } from "@iconify/react";

const MainButton = ({ px, py, title, hide }) => {
  return (
    <button
      className={`${px}  ${py} relative bg-white/5  active:bg-white/10 border border-neutral-500 hover:border-neutral-100 text-white/90 flex justify-between items-center gap-3 text-base group cursor-pointer `}
    >
      <div className="absolute bg-white/10 origin-left  inset-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 opacity-0 transition-all duration-700 ease-in-out  "></div>
      <Icon
        icon="mdi-light:play"
        className={`${hide} group-hover:text-white `}
        width="28"
        height="28"
      />

      <span className="tracking-wide group-hover:text-white ">{title}</span>
    </button>
  );
};

export default MainButton;
