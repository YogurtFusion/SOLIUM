import React, { useState } from "react";
import MainButton from "../UI/Button";
import ShpereMotion from "../UI/SphereMotion";
import SphereVideo from "../../assets/video/sphere.mp4";

const formData = [
  { id: "film-name", title: "Film Name", type: "text" },
  //   { id: "release-date", title: "Release Date", type: "date", hidden: "hidden " },
  { id: "director", title: "Director's Name", type: "text" },
  { id: "genre", title: "Genre", type: "text" },
  { id: "description", title: "Description", type: "textarea" },
];
const Form = () => {
  return (
    <section className="min-h-screen bg-neutral-950 selection:bg-white selection:text-black">
      {/* wrap */}
      <div className=" grid grid-cols-1  md:grid-cols-2 justify-center items-center min-h-screen  ">
        <div className="md:flex justify-center items-center hidden   ">
          <video width={640} height={360} 
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            onLoadedMetadata={(e)=>e.target.plabackRate=3}
            >

            <source src={SphereVideo} type="video/mp4" />
          </video>
          {/* <ShpereMotion/> */}
        </div>
        {/* FORM */}
        <div className=" bg-neutral-900  h-fit py-6 md:p-12 w-full max-w-138 mx-auto text-white  ">
          <h2 className="text-center my-4 text-4xl font-Playfair tracking-tight leading-tight  ">
            Got a film to share?
          </h2>
          <form className="flex flex-col items-start justify-start gap-4 py-8 px-16 ">
            <div className="flex flex-col gap-4 w-full">
              {formData.map((item) => (
                <label
                  key={item.id}
                  htmlFor={item.id}
                  className={`border text-base border-neutral-500 hover:border-neutral-400 focus-within:border-white active:border-neutral-400 px-6 py-2 bg-transparent transition-colors ${item.hidden} `}
                >
                  {item.type === "textarea" ? (
                    <textarea
                      id={item.id}
                      htmlFor={item.id}
                      placeholder={item.title}
                      className=" outline-none bg-transparent w-full resize-none h-24 text-white  "
                    />
                  ) : (
                    <input
                      id={item.id}
                      type={item.type}
                      className={` outline-none bg-transparent w-full text-white ${item.hidden}`}
                      placeholder={item.title}
                    />
                  )}
                </label>
              ))}
            </div>
            <MainButton
              title={"Submit"}
              px={"px-4"}
              py={"py-2"}
              hide={"hidden"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
