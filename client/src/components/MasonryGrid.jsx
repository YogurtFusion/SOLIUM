import React, { useState } from "react";
import noir from "../assets/img/mood/noir.png";
import dusk from "../assets/img/mood/dusk.png";
import vivid from "../assets/img/mood/vivid.png";
import grain from "../assets/img/mood/grain.png";
import silence from "../assets/img/mood/silence.png";
import chaos from "../assets/img/mood/chaos.png";
import symmetry from "../assets/img/mood/symmetry.png";
import echoes from "../assets/img/mood/echoes.png";
import humidity from "../assets/img/mood/humidity.png";
import melancholy from "../assets/img/mood/melancholy.png";
import rhythm from "../assets/img/mood/rhythm.png";
import surreal from "../assets/img/mood/surreal.png";

const Posters =[
//   { title: "NOIR", subtitle: "Dark and moody" },
// { title: "DUSK", subtitle: "Golden hour warmth" },
// { title: "VIVID", subtitle: "Bright neon energy" },
// { title: "GRAIN", subtitle: "Vintage film look" },
// { title: "SILENCE", subtitle: "Calm minimalism" },
// { title: "CHAOS", subtitle: "Intense and gritty" },
// { title: "SYMMETRY", subtitle: "Perfect balance" },
// { title: "ECHOES", subtitle: "Historic richness" },
// { title: "HUMIDITY", subtitle: "Tropical and heavy" },
// { title: "MELANCHOLY", subtitle: "Lonely city nights" },
// { title: "RHYTHM", subtitle: "Dreamy cityscapes" },
// { title: "SURREAL", subtitle: "Strange and otherworldly" },
  {
    "id": 1,
    "title": "NOIR",
    "subtitle": "Minimalist Shadow",
    "visualCore": "High contrast, B&W, rain, shadows.",
    "aspectRatio": "2:3",
    "img":noir,
  },
  {
    "id": 2,
    "title": "DUSK",
    "subtitle": "Melancholic Glow",
    "visualCore": "Warm, hazy, purple/orange twilight, European city.",
    "aspectRatio": "16:9",
    "img":dusk,
  },
  {
    "id": 3,
    "title": "VIVID",
    "subtitle": "Neon Blur",
    "visualCore": "Intense cyan/magenta neon, motion blur, rain.",
    "aspectRatio": "3:2",
    "img":vivid,
  },
  {
    "id": 4,
    "title": "GRAIN",
    "subtitle": "Raw Texture",
    "visualCore": "Muted earth tones, heavy film grain, light leaks, tactile.",
    "aspectRatio": "1:1",
    "img":grain,
  },
  {
    "id": 5,
    "title": "SILENCE",
    "subtitle": "Architectural Void",
    "visualCore": "Minimalist, brutalist, symmetry, negative space.",
    "aspectRatio": "21:9",
    "img":silence,
  },
  {
    "id": 6,
    "title": "CHAOS",
    "subtitle": "Gritty Pulse",
    "visualCore": "Gritty, handheld, shaky-cam, flashing lights, tension.",
    "aspectRatio": "4:3",
    "img":chaos,
  },
  {
    "id": 7,
    "title": "SYMMETRY",
    "subtitle": "Pristine Order",
    "visualCore": "Precise compositions, geometric sets, pastel colors.",
    "aspectRatio": "16:9",
    "img":symmetry,
  },
  {
    "id": 8,
    "title": "ECHOES",
    "subtitle": "Historical Opulence",
    "visualCore": "Lavish baroque architecture, fish-eye distortion, detailed fabrics.",
    "aspectRatio": "3:2",
    "img":echoes,
  },
  {
    "id": 9,
    "title": "HUMIDITY",
    "subtitle": "Decay and Heat",
    "visualCore": "Intensely humid air, deep, tonal shadows, over-the-top heat haze.",
    "aspectRatio": "21:9",
    "img":humidity,
  },
  {
    "id": 10,
    "title": "MELANCHOLY",
    "subtitle": "Urban Isolation",
    "visualCore": "Quiet, wide-angle urban isolation, pastel neon, thoughtful.",
    "aspectRatio": "16:9",
    "img":melancholy,
  },
  {
    "id": 11,
    "title": "RHYTHM",
    "subtitle": "Magic Hour Street",
    "visualCore": "Expansive city views at magic hour, deep purple skies, long takes.",
    "aspectRatio": "2:3",
    "img":rhythm,
  },
  {
    "id": 12,
    "title": "SURREAL",
    "subtitle": "Eccentric Sepia",
    "visualCore": "Sepia tones, eccentric character detail, surreal, tactile props.",
    "aspectRatio": "4:3",
    "img":surreal,
  }
]

const MasonryGrid = () => {
  const [activeId, setActiveId] = useState(null);
  const toggleMobileOverlay = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className=" bg-neutral-950 w-full  selection:bg-white selection:text-black min-h-screen">
      {/* wrap */}
      <header className="px-6 lg:pt-24 pb-20 md:px-12  max-w-7xl mx-auto text-left">
        <h1 className="font-Playfair font-medium text-5xl tracking-[-0.04em] leading-tight text-white md:text-7xl  md:tracking-tighter ">
          BROWSE BY <span className="italic" >MOOD</span> 
        </h1>
        <div className="h-px w-24 bg-neutral-600 my-8"></div>
        <p className="text-neutral-500  font-poppins mt-3 uppercase text-xs md:text-sm   max-w-md leading-loose  tracking-[0.3em]">
          Browse films by visuals and feel. Find your vibe.
        </p>
      </header>
      <div className="columns-2  md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-6 px-4 pb-24 max-w-[1600px] mx-auto ">
        {console.log('MasonryGrid render', Posters.length)}
        {Posters.map((item, index) => (
          /*  card*/
          <div
            onClick={() => toggleMobileOverlay(item.id)}
            className= {`relative break-inside-avoid group  overflow-hidden  bg-stone-900 mb-6 cursor-pointer`}
            key={item.id}
            style={{ animationDelay: `${index * 100}ms`, 
                        aspectRatio: item.aspectRatio,}}
          >
            <img
              src={item.img}
              alt={item.title}
              className={`w-full h-auto rounded-sm border border-white/5 shadow-xl object-cover transition-all duration-700 ease-out group-hover:scale-105 group-active:scale-105 w-full`}
              decoding="async"
            />
            <div
              className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0   transition-all duration-500 flex flex-col justify-end p-4 md:p-6 z-10 md:group-hover:opacity-100 ${activeId === item.id ? "opacity-100!" : "opacity-0 "} `}
            >
              
              <h3 className=" text-base md:text-xl   font-roboto-serif  capitalize text-white mb-2 md:mb-4 ">
                {item.title}
              </h3>
              <p className=" hidden md:block text-xs uppercase tracking-[0.3em] text-white/50 mb-1 ">
                {item.visualCore}              </p>
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
