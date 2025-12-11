import React from "react";
import Play from "../assets/icons/Play.svg";
import Heroimg from "../assets/img/hero-img.png";
const Hero = () => {
  return (
    <section
      className=" relative h-screen bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${Heroimg}) `,
      }}
    >
      <div className="gradient bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_45%,rgba(0,0,0,0)_80%)] h-full w-full absolute inset-0"></div>
      <div className="absolute inset-0 flex flex-col justify-end items-start p-10 pb-32 max-w-[35vw] w-full h-[63] gap-8">
        <img src={Play} alt="play icon" className="w-[89px] h-[84px] " />
        <h1>Alien: Romulus</h1>
        <p>
          Deep in the void, a forgotten station drifts in silence. When
          explorers investigate, they unleash a nightmarish creature that stalks
          them through the shadows.
        </p>
      </div>
    </section>
  );
};

export default Hero;
