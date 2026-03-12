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
    <section className="bg-neutral-100 ">
      {/* wrap */}
      <div className=" max-w-7xl h-screen flex flex-col px-4 py-6 md:p-12  ">
        {/* head */}
        <div className=" flex flex-col justify-end h-auto w-full  ">
          <p className=" font-roboto text-sm text-black/50 uppercase my-6 max-w-xs ">
            WORDS FROM THE visionaries who shaped cinema
          </p>
          <h2 className="hidden md:block uppercase  ">Voices</h2>
        </div>

        {/* voices */}
        <div className=" flex flex-col gap-4  h-full ">
          {words.map((item) => (
            <div className="flex flex-col border-l border-neutral-900 pl-2 " key={item.id}>
              <h2 className="capitalize text-xl font-roboto-serif mb-4 text-neutral-800 tracking-tight max-w-xs mx-0  "> {item.des} </h2>
              <span className="font-roboto text-neutral-600 uppercase text-sm" >{item.title} </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voices;
