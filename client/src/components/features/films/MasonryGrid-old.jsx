import React, { useState } from "react";
import img1 from "../assets/img/img 1.jpg";
import img2 from "../assets/img/img 2.jpg";
import img3 from "../assets/img/img 3.jpg";
import img4 from "../assets/img/img 4.jpg";
import img5 from "../assets/img/img 5.jpg";
import img6 from "../assets/img/img 6.jpg";
import img7 from "../assets/img/img 7.jpg";
import img8 from "../assets/img/img 8.jpg";
import img9 from "../assets/img/img 9.jpg";
import img10 from "../assets/img/img 10.jpg";
import img11 from "../assets/img/img 11.jpg";

const images = [
  {
    id: "id1",
    title: "title",
    src: img1,
  },
  {
    id: "id2",
    title: "title",
    src: img2,
  },
  {
    id: "id3",
    title: "title",
    src: img3,
  },
  {
    id: "id4",
    title: "title",
    src: img4,
  },
  {
    id: "id5",
    title: "title",
    src: img5,
  },
  {
    id: "id6",
    title: "title",
    src: img6,
  },
  {
    id: "id7",
    title: "title",
    src: img7,
  },
  {
    id: "id8",
    title: "title",
    src: img8,
  },
  {
    id: "id9",
    title: "title",
    src: img9,
  },
  {
    id: "id10",
    title: "title",
    src: img10,
  },
  {
    id: "id11",
    title: "title",
    src: img11,
  },
];
const MasonryGrid = () => {
  const [activeId, setActiveId] = useState(null);
  const toggleMobileOverlay = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className=" bg-neutral-950 w-full  selection:bg-white selection:text-black">
      {/* wrap */}
      <header className="px-6 lg:pt-24 pb-20 md:px-12  max-w-7xl mx-auto text-left">
        <h1 className="font-Playfair font-medium text-5xl tracking-[-0.04em] leading-normal md:leading-loose text-white md:text-7xl  md:tracking-tighter ">
          BROWSE BY MOOD
        </h1>
        <p className="text-neutral-400  font-poppins leading-relaxed tracking-[0.2em] mt-3 uppercase text md:text-sm  lg:text-base max-w-md">
          Browse film's Category according to your mood.
        </p>
      </header>
      <div className="columns-2  md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-6 px-4 pb-24 max-w-[1600px] mx-auto ">
        {images.map((item, index) => (
          /*  card*/
          <div
            onClick={() => toggleMobileOverlay(item.id)}
            className=" relative break-inside-avoid group  overflow-hidden  bg-stone-900 mb-6 cursor-pointer"
            key={item.id}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={item.src}
              alt={item.title}
              // fetchPriority={index < 3 ? "high" : "low"}
              className="w-full h-auto rounded-sm border border-white/5 shadow-xl object-cover transition-all duration-700 ease-out group-hover:scale-105 group-active:scale-105"
              decoding="async"
            />
            <div
              className={`absolute  inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0   transition-all duration-500 flex flex-col justify-end p-4 md:p-6 z-10 md:group-hover:opacity-100 ${activeId === item.id ? "opacity-100!" : "opacity-0 "} `}
            >
              <p className=" hidden md:block text-xs uppercase tracking-[0.3em] text-white/50 mb-1 ">
                Atmosphere
              </p>
              <h3 className=" text-base md:text-xl   font-roboto-serif  capitalize text-white mb-2 md:mb-4 ">
                {item.title}
              </h3>
              <button className=" group/btn relative  border border-white/20 hover:border-white active:border-white w-fit py-1 px-3 md:px-4 md:py-2 text-[10px] md:text-xs uppercase tracking-widest text-white transition-colors duration-300 ">
                {/* <span className="relative z-10">
                  
                  <span className="hidden md:block">Explore</span> more
                </span> */}
                <p className="relative z-10">
                  Explore <span className="hidden md:inline">More</span>{" "}
                </p>
                <div className="absolute inset-0 bg-white scale-x-0  group-active/btn:scale-x-100 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 opacity-10"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasonryGrid;
