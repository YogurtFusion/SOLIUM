import React from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";

const Creators = () => {
  const ref = useRef(null);
  const { events } = useDraggable(ref);
  return (
    <section className="text-center max-w-[90vw] mx-auto   ">
      <h1 className="border-b inline-block">Our creators</h1>

      <div
        ref={ref}
        {...events}
        className="creators-cards flex overflow-x-auto gap-6 my-16 scrollbar-hide cursor-ew-resize active:cursor-grabbing  "
      >
        <div className="card shrink-0 w-[150px] ">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-[150px] w-[150px] object-cover aspect-square rounded-lg "
            alt="creator picture"
          />
          <p className=" mt-4">Artist Name</p>
        </div>

        <div className="card shrink-0 w-[150px] ">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-[150px] w-[150px] object-cover aspect-square rounded-lg "
            alt="creator picture"
          />
          <p className=" mt-4">Artist Name</p>
        </div>

        <div className="card shrink-0 w-[150px] ">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-[150px] w-[150px] object-cover aspect-square rounded-lg "
            alt="creator picture"
          />
          <p className=" mt-4">Artist Name</p>
        </div>

        <div className="card shrink-0 w-[150px] ">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-[150px] w-[150px] object-cover aspect-square rounded-lg "
            alt="creator picture"
          />
          <p className=" mt-4">Artist Name</p>
        </div>

        <div className="card shrink-0 w-[150px] ">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-[150px] w-[150px] object-cover aspect-square rounded-lg "
            alt="creator picture"
          />
          <p className=" mt-4">Artist Name</p>
        </div>

        <div className="card shrink-0 w-[150px] ">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-[150px] w-[150px] object-cover aspect-square rounded-lg "
            alt="creator picture"
          />
          <p className=" mt-4">Artist Name</p>
        </div>

        <div className="card shrink-0 w-[150px] ">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-[150px] w-[150px] object-cover aspect-square rounded-lg "
            alt="creator picture"
          />
          <p className=" mt-4">Artist Name</p>
        </div>

        <div className="card shrink-0 w-[150px] ">
          <img
            src="https://picsum.photos/200/300"
            className="max-w-[150px] w-[150px] object-cover aspect-square rounded-lg "
            alt="creator picture"
          />
          <p className=" mt-4">Artist Name</p>
        </div>
      </div>
    </section>
  );
};

export default Creators;
