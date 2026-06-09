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
    <section className="min-h-screen bg-neutral-950 selection:bg-white selection:text-black text-white">
      <div className="h-fit p-12 md:p-24 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
        <div className=" max-w-sm text-left">
          <h2 className=" my-4 text-5xl md:text-6xl lg:text-7xl font-heading tracking-tight leading-tight ">
            Got a film to share?
          </h2>
          <p className="text-neutral-600 md:text-base text-sm leading-relaxed text-pretty font-poppins ">
            Submit your work for consideration in our curated catalog. We are
            always looking for unique voices, striking visuals, and deeply human
            stories.
          </p>
        </div>
        <form className="flex flex-col items-start justify-start gap-4 lg:py-8 lg:px-16 w-full font-poppins">
          <div className="flex flex-col  gap-12 w-full">
            {formData.map((item) => (
              <div
                key={item.id}
                className={`relative border-b text-base border-neutral-800 hover:border-neutral-600  active:border-neutral-400 focus-within:border-white   bg-transparent transition-colors ${item.hidden||""} flex flex-col items-start`}
              >
               
                {item.type === "textarea" ? (
                  <textarea
                    id={item.id}
                    name={item.id}
                    placeholder=""
                    className="peer outline-none bg-transparent w-full resize-none h-24 pt-6 pb-2 text-neutral-300 transition-colors "
                  />
                ) : (
                  <input
                    id={item.id}
                    name={item.id}
                    autoComplete="off"
                    type={item.type}
                    className={`peer outline-none bg-transparent w-full pt-6 pb-2 text-neutral-300 transition-colors ${item.hidden||""}`}
                    placeholder=""
                  />
                )}
                 <label
                  htmlFor={item.id}
                  className="absolute left-0 top-6 text-neutral-500  pointer-events-none transition-all duration-300 ease-out origin-left peer-focus:top-0 peer-focus:scale-75 peer-focus:text-white peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-400 "
                >
                  {item.title}
                </label>
              </div>
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
    </section>
  );
};

export default Form;
