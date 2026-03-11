import React, { useState } from "react";
import Background from "../assets/hero-bg.png";
import MainButton from "./UI/Button";
const Hero = () => {
  const [mouse, SetMouse] = useState({ x: 50, y: 50 });

  // e is the name of the  report browser gave me
  // .clientX: Is a built-in label the browser uses to store the horizontal pixel number.

  const handleMouseMove = (e) => {
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;
    SetMouse({ x: xPercent, y: yPercent });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden  bg-gray-500"
    >
      <img
        src={Background}
        className="absolute h-full w-full object-cover inset-0 "
        alt="Cinematic piano background"
        loading="eager"
        fetchPriority="high"
        />
      
      
      <div className="absolute inset-0 radial-vintage pointer-events-none z-10 lg:hidden " />
      <div
        className=" hidden lg:block absolute inset-0 pointer-events-none z-10 "
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, transparent 20%, rgba(0,0,0,0.9) 40%`,
        }}
      />
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
