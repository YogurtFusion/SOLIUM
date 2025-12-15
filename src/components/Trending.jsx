import React from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Trending = () => {
  return (
    <section className="my-36 text-center h-fit max-w-[80vw] w-full mx-auto ">
      <h1 className="inline text-center border-b">Trending</h1>

      <div
        className="cards flex items-center gap-6 my-16  overflow-x-auto
              "
      >
        <div className="card shrink-0 rounded-lg  border  ">
          <img
            src="https://picsum.photos/200/300"
            className=" w-full max-w-[200px]  aspect-[2/3] object-cover rounded-lg border border-white "
            alt=""
          />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>

        <div className="card shrink-0  mx-0 rounded-lg  border  ">
          <img
            src="https://picsum.photos/200/300"
            className=" w-full max-w-[200px] aspect-[2/3] object-cover rounded-lg border border-white "
            alt=""
          />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>

        <div className="card shrink-0  mx-0 rounded-lg  border  ">
          <img
            src="https://picsum.photos/200/300"
            className=" w-full max-w-[200px] aspect-[2/3] object-cover rounded-lg border border-white "
            alt=""
          />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>

        <div className="card shrink-0  mx-0 rounded-lg  border  ">
          <img
            src="https://picsum.photos/200/300"
            className=" w-full max-w-[200px] aspect-[2/3] object-cover rounded-lg border border-white "
            alt=""
          />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>

        <div className="card shrink-0  mx-0 rounded-lg  border  ">
          <img
            src="https://picsum.photos/200/300"
            className=" w-full max-w-[200px] aspect-[2/3] object-cover rounded-lg border border-white "
            alt=""
          />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>

        <div className="card shrink-0  mx-0 rounded-lg  border  ">
          <img
            src="https://picsum.photos/200/300"
            className=" w-full max-w-[200px] aspect-[2/3] object-cover rounded-lg border border-white "
            alt=""
          />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>

        <div className="card shrink-0  mx-0 rounded-lg  border  ">
          <img
            src="https://picsum.photos/200/300"
            className=" w-full max-w-[200px] aspect-[2/3] object-cover rounded-lg border border-white "
            alt=""
          />
          <h2 className="mt-3 text-center">Film-1</h2>
        </div>
      </div>
    </section>
  );
};

export default Trending;
