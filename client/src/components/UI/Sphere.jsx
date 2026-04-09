import React, { useState,useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Sphere = () => {
  const circleRef = useRef(null);
  useGSAP(() => {
    gsap.to("svg ellipse", {
    });
  });
  return (
    <div ref={circleRef} className="h-full w-full flex justify-center items-center">
        
    <svg
      className="w-[60%] h-[60%] sphere"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      style={{ strokeWidth: "0.25px" }}
    >
      <g
        style={{
            transformOrigin: "50% center",
            transform: "rotate(-30deg)",
            opacity: 1,
        }}
      >
        <ellipse cx="74.2135" cy="50" rx="18.3565" ry="36.713" />
        <ellipse cx="68.6421" cy="50" rx="20.5323" ry="41.0646" />
        <ellipse cx="63.0707" cy="50" rx="22.0614" ry="44.1228" />
        <ellipse cx="57.4993" cy="50" rx="23.1076" ry="46.2151" />
        <ellipse cx="51.9278" cy="50" rx="23.7278" ry="47.4556" />
        <ellipse cx="46.3564" cy="50" rx="23.5846" ry="47.1693" />
        <ellipse cx="40.785" cy="50" rx="22.8312" ry="45.6624" />
        <ellipse cx="35.2135" cy="50" rx="21.6474" ry="43.2948" />
        <ellipse cx="29.6421" cy="50" rx="19.9422" ry="39.8844" />
        <ellipse cx="24.0707" cy="50" rx="17.5111" ry="35.0222" />
        <ellipse cx="18.4993" cy="50" rx="13.8952" ry="27.7903" />
        <ellipse cx="12.9278" cy="50" rx="7.373" ry="14.746" />
        <ellipse cx="85.3564" cy="50" rx="9.9963" ry="19.9926" />
        <ellipse cx="79.785" cy="50" rx="15.1856" ry="30.3712" />
        <ellipse cx="74.2135" cy="50" rx="18.3565" ry="36.713" />
      </g>
    </svg>
        </div>
  );
};

export default Sphere;
