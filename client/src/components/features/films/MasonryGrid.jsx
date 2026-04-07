import React, { act, useState } from "react";
import GridCard from "@/components/UI/GridCard";
import Posters from "@/data/posters";

const MasonryGrid = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleMobileOverlay = (id) => {
    console.log("before: ", activeId)
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
    console.log("after: ", activeId ===id?null: id)
  };

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
