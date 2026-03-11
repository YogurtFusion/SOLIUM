import React from "react";
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
  return (
    <section className=" bg-neutral-950 p-8 mx-auto ">
      {/* wrap */}
      <div className="columns-2  md:columns-3 lg:columns-4 gap-6 space-y-6 max-w-[1440px]">
        {images.map((item, index) => (
          /*  card*/
          <div
            className=" relative break-inside-avoid group  overflow-hidden  bg-stone-900 mb-6 cursor-pointer"
            key={item.id}
          >
            <img
              src={item.src}
              alt={item.title}
              fetchPriority={index < 3 ? "high" : "low"}
              loading={index < 3 ? "eager" : "lazy"}
              className="w-full h-auto rounded-sm sborder border-white/5 shadow-xl object-cover transition-all duration-700 ease-out group-hover:scale-105 group-active:scale-105"
              decoding="async"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity- group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6  z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-1 ">
                Atmosphere
              </p>
              <h3 className="text-xl  font-roboto-serif  capitalize text-white mb-4">
                {item.title}
              </h3>
              <button className=" group/btn relative  border border-white/20 hover:border-white active:border-white w-fit px-4 py-2 text-xs uppercase tracking-widest text-white transition-colors duration-300 ">
                <span className="relative z-10">
                  
                  <span className="hidden md:block">Explore</span> more
                </span>
                <div className="absolute inset-0 bg-white scale-x-0  group-active/btn:scale-x-100 group-hover/btn:scale-x-100 origin-left transition-transform duration-300 opacity-10"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasonryGrid;
