import React, { useState } from "react";
import MainButton from "./UI/Button";
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
      <div className=" grid grid-cols-1  lg:grid-cols-2 justify-center items-center min-h-screen  ">
        <div className="lg:flex justify-center items-center hidden  ">
          <svg
            className="w-[60%] h-[60%]"
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
        {/* FORM */}
        <div className=" bg-neutral-900  h-fit py-6 md:p-12 w-fit mx-auto text-white  ">
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
