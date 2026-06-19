import React, { useRef, useState } from "react";
import Background from "../../assets/img/hero/hero-bg.png";
import MainButton from "../UI/Button";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {
  // const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [isLoad, setIsLoad] = useState(false);

  const containerRef = useRef();
  const spotlightRef = useRef();

  useGSAP(
    () => {
      if (isLoad) {
        const tl = gsap.timeline();

        tl.fromTo(
          ".animate-title",
          { clipPath: "inset(100% 0% 0 0 ) " },
          {
            clipPath: "inset(0% 0% 0 0 ) ",
            duration: 1.2,
            ease: "power3.inOut",
          },
        );

        tl.fromTo(
          ".animate-fade",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
          "<0.5",
        );

        const handleMouseMove = (e) => {
          const xPercent = (e.clientX / window.innerWidth) * 100;
          const yPercent = (e.clientY / window.innerHeight) * 100;
          if (spotlightRef.current) {
            gsap.to(spotlightRef.current, {
              "--x": `${xPercent}%`,
              "--y": `${yPercent}%`,
              duration: 0.5,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    },
    { dependencies: [isLoad], scope: containerRef },
  );

  // const handleMouseMove = (e) => {
  //   const xPercent = (e.clientX / window.innerWidth) * 100;
  //   const yPercent = (e.clientY / window.innerHeight) * 100;
  //   setMouse({ x: xPercent, y: yPercent });
  // };

  return (
    <section
      ref={containerRef}
      // onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden  bg-black min-h-screen  "
    >
      <div className="max-w-screen-2xl mx-auto h-full flex flex-col items-center justify-center ">
        <img
          src={Background}
          className={`absolute h-full w-full object-cover inset-0 duration-1000 transition-all ease-out  ${isLoad ? "opacity-100 " : "opacity-0 "}  pt-20 `}
          onLoad={() => setIsLoad(true)}
          alt="Cinematic stage background"
          loading="eager"
          fetchPriority="high"
        />

        {/* Load screen */}
        {!isLoad && (
          <div className="flex flex-col gap-3 md:gap-5 justify-center items-center text-center h-full w-full   bg-black fixed object-cover inset-0  ">
            <h1 className="uppercase text-white text-5xl md:text-7xl lg:text-8xl font-semibold font-roboto-serif ">
              Solium
            </h1>
            <p className=" text-white/75 md:text-white/70 max-w-84 leading-normal tracking-wider font-roboto md:max-w-xl  md:text-xl  ">
              Loading Cinematic Experience...
            </p>
          </div>
        )}

        {isLoad && (
          <div className="h-full w-full bg-black mt-16">
            {/* <div className="absolute inset-0 radial-vintage pointer-events-none z-10 lg:hidden " /> */}
            <div
              ref={spotlightRef}
              className="  absolute inset-0 pointer-events-none z-10 h-full w-full "
              style={{
                // background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, transparent 20%, rgba(0,0,0,0.95) 40%)`,
                "--x": "50%",
                "--y": "50%",
                background: `radial-gradient(circle at var(--x) var(--y), transparent 100px, transparent 100px, rgba(0,0,0,0.95) 200px)`,
              }}
            />
            {/*  body */}
            <div className=" relative z-10 flex flex-col justify-center items-start gap-6 md:gap-8 lg:gap-12 w-full h-full max-w-4xl  px-16  ">
              {/* text */}
              <div className="  flex flex-col justify-center items-start gap-3 md:gap-5 text-start ">
                {/* tags */}
                <div className="flex  justify-between items-center gap-2 animate-fade">
                  <span className="text-sm text-muted leading-relaxed tracking-widest ">
                    Curated{" "}
                  </span>
                  <span className="text-sm text-muted leading-relaxed tracking-widest ">
                    {" "}
                    &middot;{" "}
                  </span>
                  <span className="text-sm text-muted leading-relaxed tracking-widest ">
                    Underground
                  </span>
                  <span className="text-sm text-muted leading-relaxed tracking-widest ">
                    {" "}
                    &middot;{" "}
                  </span>
                  <span className="text-sm text-muted leading-relaxed tracking-widest ">
                    Essential
                  </span>
                </div>
                <h1 className="animate-title capitalize text-white text-5xl md:text-7xl lg:text-8xl font-light  ">
                  Film as{" "}
                  <div>
                    <span className="lowercase font-normal text-foreground/50">
                      {" "}
                      felt
                    </span>{" "}
                    experience.
                  </div>
                </h1>
                <p className=" text-white/40 max-w-xs text-start font-light leading-relaxed tracking-wider font-poppins md:max-w-xl  md:text-xl animate-fade ">
                  Platform to discover films by independent and emerging
                  filmmakers. Discover new voices and support them
                </p>
              </div>

              {/* button */}
              <Link to={"/collection"} className="animate-fade">
                <MainButton
                  title={"Begin Experience"}
                  px={"px-6 md:px-14"}
                  py={"py-3 md:py-4"}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
