import React from "react";
import Background from "../assets/hero-bg.png";
import MainButton from "./UI/Button";
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden  bg-gray-500">
      <img
        src={Background}
        className="absolute h-full w-full object-cover inset-0 "
        alt="Cinematic piano background"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 radial-vintage pointer-events-none z-10 p-6" />

      {/*  body */}
      <div className=" relative z-10 flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-12 h-full ">
        {/* text */}
        <div className="flex flex-col gap-3 md:gap-5 justify-center items-center text-center  ">
          <h1 className="uppercase text-amber-50 text-5xl md:text-7xl lg:text-8xl font-semibold font-roboto-serif ">
            Solium
          </h1>
          <p className=" text-white/75 md:text-white/70 max-w-[336px] leading-normal tracking-wider font-roboto md:max-w-xl  md:text-xl  ">
            Where cinema becomes art. A curated collection of independent films
            that challenge, inspire, and transform.
          </p>
        </div>

        {/* button */}
        <MainButton
          title={"Begin Experience"}
          px={"px-6 md:px-14"}
          py={"py-3 md:py-4"}
        />
      </div>
    </section>
  );
};

export default Hero;
