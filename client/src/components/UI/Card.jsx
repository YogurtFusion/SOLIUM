import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({
  id,
  title,
  img,
  subtitle,
  aspectRatio,
  activeId,
  toggleMobileOverlay,
  linkPath, // ADDED: Allows you to inject custom routes (like /search/:id)
}) => {
  const [isLoad, SetIsLoad] = useState(false);
  const navigate  = useNavigate()

  const formattedName = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full h-full">
      <div
        onClick={() => toggleMobileOverlay && toggleMobileOverlay(id)} // MODIFIED: Added safety check in case toggleMobileOverlay isn't passed
        className={`relative break-inside-avoid group  overflow-hidden  bg-stone-900 mb-6 cursor-pointer`}
        key={id}
        style={{
          aspectRatio: aspectRatio || "16/9",
        }}
      >
        {/* ADDED: Fallback for movies missing poster art */}
        {img ? (
          <img
            src={img}
            alt={title}
            className={`w-full h-full rounded-sm border border-white/5 shadow-xl object-cover transition-all duration-700 ease-out   ${isLoad ? "opacity-100" : "opacity-0"} `}
            decoding="async"
            onLoad={() => SetIsLoad(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center text-xs text-muted font-body tracking-widest uppercase border border-white/5">
            <span className="mb-2 opacity-50">Archive</span>
            No Poster
          </div>
        )}

        {/* MODIFIED: Only show loader if an image actually exists */}
        {img && !isLoad && (
          <div className="absolute inset-0 flex flex-col justify-center items-center  w-full h-full bg-stone-950/50">
            <h3 className="text-center text-sm md:text-base   font-poppins  capitalize text-neutral-500 animate-pulse tracking-widest   ">
              Image Loading...
            </h3>
            <div className="w-1/2 h-px bg-neutral-700 mt-2 overflow-hidden relative">
              <div className="absolute inset-0 bg-neutral-400 -translate-x-full animate-[shimmer_2s_infinite] w-full"></div>
            </div>
          </div>
        )}

        {/* MODIFIED: Changed isLoad check to include cases where there is no image */}
        {(!img || isLoad) && (
          <div
            className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0   transition-all duration-500 flex flex-col justify-end p-4 lg:p-6 z-10 md:group-hover:opacity-100 ${activeId === id ? "opacity-100" : "opacity-0 "} `}
          >
            <h3 className=" text-base md:text-xl   font-Playfair capitalize text-white mb-2 lg:mb-4 ">
              {title}
            </h3>
            <p className=" hidden lg:block text-xs uppercase font-poppins tracking-[0.3em] text-white/50 mb-1 ">
              {subtitle}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
            navigate(linkPath||`/mood/${formattedName}`)
            }}
              
              className=" group/btn relative  border border-white/20 hover:border-white active:border-white w-fit py-1 px-3 md:px-4 md:py-2 text-[10px] md:text-xs uppercase tracking-widest text-white transition-colors duration-300 "
              // MODIFIED: Uses custom linkPath if provided, otherwise falls back to your original mood route
            >
              <p className="relative z-10">
                Explore <span className="hidden md:inline">More</span>
              </p>
              <div className="absolute inset-0 bg-white scale-x-0  group-active/btn:scale-x-100 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 opacity-10"></div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
