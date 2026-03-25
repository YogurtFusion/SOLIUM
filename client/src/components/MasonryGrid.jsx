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
import GridCard from "./UI/gridCard";

const Posters = [
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
    id: 1,
    title: "NOIR",
    subtitle: "Minimalist Shadow",
    visualCore: "High contrast, B&W, rain, shadows.",
    aspectRatio: "2:3",
    img: noir,
  },
  {
    id: 2,
    title: "DUSK",
    subtitle: "Melancholic Glow",
    visualCore: "Warm, hazy, purple/orange twilight, European city.",
    aspectRatio: "16:9",
    img: dusk,
  },
  {
    id: 3,
    title: "VIVID",
    subtitle: "Neon Blur",
    visualCore: "Intense cyan/magenta neon, motion blur, rain.",
    aspectRatio: "3:2",
    img: vivid,
  },
  {
    id: 4,
    title: "GRAIN",
    subtitle: "Raw Texture",
    visualCore: "Muted earth tones, heavy film grain, light leaks, tactile.",
    aspectRatio: "1:1",
    img: grain,
  },
  {
    id: 5,
    title: "SILENCE",
    subtitle: "Architectural Void",
    visualCore: "Minimalist, brutalist, symmetry, negative space.",
    aspectRatio: "21:9",
    img: silence,
  },
  {
    id: 6,
    title: "CHAOS",
    subtitle: "Gritty Pulse",
    visualCore: "Gritty, handheld, shaky-cam, flashing lights, tension.",
    aspectRatio: "4:3",
    img: chaos,
  },
  {
    id: 7,
    title: "SYMMETRY",
    subtitle: "Pristine Order",
    visualCore: "Precise compositions, geometric sets, pastel colors.",
    aspectRatio: "16:9",
    img: symmetry,
  },
  {
    id: 8,
    title: "ECHOES",
    subtitle: "Historical Opulence",
    visualCore:
      "Lavish baroque architecture, fish-eye distortion, detailed fabrics.",
    aspectRatio: "3:2",
    img: echoes,
  },
  {
    id: 9,
    title: "HUMIDITY",
    subtitle: "Decay and Heat",
    visualCore:
      "Intensely humid air, deep, tonal shadows, over-the-top heat haze.",
    aspectRatio: "21:9",
    img: humidity,
  },
  {
    id: 10,
    title: "MELANCHOLY",
    subtitle: "Urban Isolation",
    visualCore: "Quiet, wide-angle urban isolation, pastel neon, thoughtful.",
    aspectRatio: "16:9",
    img: melancholy,
  },
  {
    id: 11,
    title: "RHYTHM",
    subtitle: "Magic Hour Street",
    visualCore:
      "Expansive city views at magic hour, deep purple skies, long takes.",
    aspectRatio: "2:3",
    img: rhythm,
  },
  {
    id: 12,
    title: "SURREAL",
    subtitle: "Eccentric Sepia",
    visualCore:
      "Sepia tones, eccentric character detail, surreal, tactile props.",
    aspectRatio: "4:3",
    img: surreal,
  },
];

const MasonryGrid = () => {
  const [activeId, setActiveId] = useState(null)

  const toggleMobileOverlay =(id)=>{
  setActiveId(activeId === id ? null :id  )  
  }
  

  return (
    <section className=" bg-neutral-950 w-full  selection:bg-white selection:text-black min-h-screen">
      {/* wrap */}
      <header className="px-6 lg:pt-24 pb-20 md:px-12  max-w-7xl mx-auto text-left">
        <h1 className="font-Playfair font-medium text-5xl tracking-[-0.04em] leading-tight text-white md:text-7xl  md:tracking-tighter ">
          BROWSE BY <span className="italic">MOOD</span>
        </h1>
        <div className="h-px w-24 bg-neutral-600 my-8"></div>
        <p className="text-neutral-500  font-poppins mt-3 uppercase text-xs md:text-sm   max-w-md leading-loose  tracking-[0.3em]">
          Browse films by visuals and feel. Find your vibe.
        </p>
      </header>
      <div className="columns-2  md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-6 px-4 pb-24 max-w-[1600px] mx-auto ">
        {Posters.map((item, index) => (
          /*  card*/
          <div key={item.id} className="">
            <GridCard
              img={item.img}
              title={item.title}
              aspectRatio={item.aspectRatio}
              id={item.id}
              subtitle={item.subtitle}
              visualCore={item.visualCore}
              activeId={activeId === item.id}
              toggleMobileOverlay={toggleMobileOverlay}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasonryGrid;
