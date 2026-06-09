import React from "react";
import MainButton from "../../UI/Button";



const FilmDetail = () => {
  return (
    <main className="min-h-screen bg-bg text-foreground font-body">
      {/* wrap */}
      <div className=" max-w-7xl mx-auto pt-20 md:pt-24">
        {/* img */}
        <div className="relative w-full h-[60vh] md:h-[70vh] ">
      <img
            src={`https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop`}
            className="object-cover object-center w-full h-full"
            alt="Poster"
          />
        </div>

        {/* img body */}
        <div className="flex flex-col gap-8 p-6 md:p-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-1">
            <h1 className="capitalize text-4xl font-heading font-bold tracking-tight">
              solium
            </h1>
            <div className="flex items-center gap-2 text-sm">
              <span className=" text-muted">2024</span>
              <span className="text-faint">•</span>
              <span className="uppercase text-muted">114 MIN </span>
              <span className="text-faint">•</span>
              <span className="uppercase text-foreground"> Director name</span>
            </div>
          </div>
          {/* <div className=""> */}
            <div className="border-l border-border w-full h-full pl-4">
              <p className="italic text-pretty text-muted leading-relaxed ">
                A brutal, hypnotic meditation on isolation. Vane constructs a
                world devoid of warmth, leaving only raw structural tension and
                quiet devastation.
              </p>
            </div>

            {/* tags */}
            <div className=" max-w-2xs flex flex-col gap-6">
              <div className=" flex flex-col gap-4">
                <span className="uppercase text-sm text-faint  ">Mood</span>

                <div className="flex flex-wrap gap-2 items-center justify-between text-xs leading-relaxed tracking-widest">
                  <span className="uppercase border border-foreground px-1 py-0.5">
                    mechlanholy
                  </span>
                  <span className="uppercase border border-foreground px-1 py-0.5">
                    grian
                  </span>
                  <span className="uppercase border border-foreground px-1 py-0.5">
                    minimalist
                  </span>
                </div>
              </div>

              <div className=" flex flex-col gap-4">
                <span className="uppercase text-sm text-faint  ">Genre</span>
                <div className="flex flex-wrap gap-2 items-center justify-between text-xs leading-relaxed tracking-widest">
                  <span className="uppercase bg-subtle border-border px-3 py-1">
                    Drama
                  </span>
                  <span className="uppercase bg-subtle border-border px-3 py-1">
                    Romance
                  </span>
                  <span className="uppercase bg-subtle border-border px-3 py-1">
                    thriller
                  </span>
                </div>
              </div>
            </div>
          {/* </div> */}
          <div className="mt-4 mx-auto w-full ">
            <MainButton
            title={"Where to watch "}
            px={"px-8"}
            py={"py-4"}
            />
          </div>
          <div />
        </div>
      </div>
    </main>
  );
};

export default FilmDetail;
