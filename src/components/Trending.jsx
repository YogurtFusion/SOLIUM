import React from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Trending = () => {
  return (
    <section className="my-56 text-center h-screen">
      <h1 className="inline text-center border-b">Trending</h1>

      <div
        className="cards flex  justify-between items-center my-16 
              "
      >
        <CircleChevronLeft
          size={80}
          height={80}
          strokeWidth={1.5}
          className=" text-white m-10 "
        />

        <div className="card w-56  rounded-lg  border m-auto "> 

          <img
          width={250}
          height={100}
            src="https://picsum.photos/200/300"
            className=" object-cover rounded-lg border border-white "
            alt=""
            />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>


        <div className="card w-56  rounded-lg  border m-auto "> 

          <img
          width={250}
          height={100}
            src="https://picsum.photos/200/300"
            className=" object-cover rounded-lg border border-white "
            alt=""
            />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>


        <div className="card w-56  rounded-lg  border m-auto "> 

          <img
          width={250}
          height={100}
            src="https://picsum.photos/200/300"
            className=" object-cover rounded-lg border border-white "
            alt=""
            />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>


        <div className="card w-56  rounded-lg  border m-auto "> 

          <img
          width={250}
          height={100}
            src="https://picsum.photos/200/300"
            className=" object-cover rounded-lg border border-white "
            alt=""
            />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>

        <CircleChevronRight
          size={80}
          strokeWidth={1.5}
          className="text-white m-10"
        />
      </div>
    </section>
  );
};

export default Trending;
