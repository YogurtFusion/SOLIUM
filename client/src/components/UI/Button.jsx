import React from "react";
import { Icon } from "@iconify/react";

const MainButton = ({ px, py, title }) => {
  return (
    <button
      className={`${px}  ${py} bg-white/5 hover:bg-white/10 active:bg-white/10 border border-white/60 text-white flex justify-between items-center gap-3 text-base  `}
    >
        <Icon icon="mdi-light:play" width="28" height="28" />

<span className="tracking-wide">{title}</span>      
    </button>
  );
};

export default MainButton;
