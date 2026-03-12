import React from "react";

const words = [
  {
    id: "id1",
    title: "director name",
    des:' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat numquam nobis incidunt quia inventore?"  ',
  },
  {
    id: "id2",
    title: "director name",
    des:' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat numquam nobis incidunt quia inventore?"  ',
  },
  {
    id: "id3",
    title: "director name",
    des:' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat numquam nobis incidunt quia inventore?"  ',
  },
  {
    id: "id4",
    title: "director name",
    des:' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat numquam nobis incidunt quia inventore?"  ',
  },
];

const Voices = () => {
  return (
    <section className="bg-neutral-100 min-h-screen py-20 px-6 md:px-24  ">
      {/* wrap */}
      <div className=" max-w-5xl mx-auto   ">
        {/* head */}
        <header className=" mb-20 border-b border-neutral-300 pb-8  ">
          <h2 className=" text-6xl font-Playfair tracking-tighter uppercase  text-neutral-950 ">Voices</h2>
          <p className=" font-poppins text-xs text-neutral-500 uppercase tracking-[0.2em] mt-4 ">
            WORDS FROM THE visionaries who shaped cinema
          </p>
        </header>

        {/* voices */}
        <div className="space-y-16">
          {words.map((item) => (
            <figure className=" group flex flex-col border-l-2  border-neutral-400 pl-8 transition-colors duration-500 hover:border-neutral-950 md:pl-6 " key={item.id}>
              <blockquote className="capitalize text-2xl md:text-4xl  md:tracking-wide font-Playfair  text-neutral-800 tracking-tight max-w-3xl italic   "> {item.des} </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 text-neutral-500 text-xs uppercase tracking-widest font-poppins" >

              <span className="w-8 h-px bg-neutral-400  " ></span>{item.title}
              </figcaption>
            </figure>
         ))}
        </div>
      </div>
    </section>
  );
};

export default Voices;
