import React, { useState } from "react";

const GridCard = ({ id, title, img, subtitle, aspectRatio, activeId , toggleMobileOverlay }) => {

  return (
    <div className="">
      <div
        onClick={() => toggleMobileOverlay(id)}
        className={`relative break-inside-avoid group  overflow-hidden  bg-stone-900 mb-6 cursor-pointer`}
        key={id}
        style={{
          // animationDelay: `${index * 100}ms`,
          aspectRatio: aspectRatio,
        }}
      >
        <img
          src={img}
          alt={title}
          className={`w-full h-auto rounded-sm border border-white/5 shadow-xl object-cover transition-all duration-700 ease-out group-hover:scale-105 group-active:scale-105 w-full`}
          decoding="async"
        />
        <div
          className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0   transition-all duration-500 flex flex-col justify-end p-4 md:p-6 z-10 md:group-hover:opacity-100 ${activeId  ? "opacity-100!" : "opacity-0 "} `}
        >
          <h3 className=" text-base md:text-xl   font-roboto-serif  capitalize text-white mb-2 md:mb-4 ">
            {title}
          </h3>
          <p className=" hidden md:block text-xs uppercase tracking-[0.3em] text-white/50 mb-1 ">
            {subtitle}
          </p>
          <button className=" group/btn relative  border border-white/20 hover:border-white active:border-white w-fit py-1 px-3 md:px-4 md:py-2 text-[10px] md:text-xs uppercase tracking-widest text-white transition-colors duration-300 ">
            {/* <span className="relative z-10">
                  
                  <span className="hidden md:block">Explore</span> more
                </span> */}
            <p className="relative z-10">
              Explore <span className="hidden md:inline">More</span>
            </p>
            <div className="absolute inset-0 bg-white scale-x-0  group-active/btn:scale-x-100 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 opacity-10"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
