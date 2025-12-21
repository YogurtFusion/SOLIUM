import React, { useState } from "react";
import { Plus } from "lucide-react";

const CommonQuestion = () => {
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);
  
  return (
    <section className="max-w-[80vw] mx-auto ">
      <h2 className="text-3xl! mb-8">Common Questions</h2>
      <div className=" flex flex-col gap-8">
        <div className="common-ques border border-white rounded-lg hover:bg-[#2D2D2D] gap-4 flex flex-col p-2 ">
          <div className="question flex items-center gap-2 ">
            <button className="" onClick={() => setshow1(!show1)}>
              <Plus
                className={`invert transition-all duration-300 ${
                  show1 ? "rotate-45" : " rotate-0 "
                }`}
                width={40}
                height={40}
              />
            </button>
            <h3>What is SOLIM ?</h3>
          </div>
          {show1 && (
            <div
              className={`answer my-2 mx-8 ${
                show1 ? " max-h-40 opacity-100 " : "max-h-0 opacity-0 "
              }`}
            >
              <h3 className="text-3xl!">
                SOLIM is a streaming website made for INDIE movies .
              </h3>
            </div>
          )}
        </div>

        <div className="common-ques border border-white rounded-lg hover:bg-[#2D2D2D] gap-4 flex flex-col p-2 ">
          <div className="question flex items-center gap-2 ">
            <button className="" onClick={() => setshow2(!show2)}>
              <Plus
                className={`invert transition-all duration-300 ${
                  show2 ? "rotate-45" : "rotate-0"
                } `}
                width={40}
                height={40}
              />
            </button>
            <h3>What’s the mission of SOLIM</h3>
          </div>
          {show2 && (
            <div className="answer my-2 mx-8 ">
              <h3 className="text-3xl!">
                It’s made for indie movie creators for hosting their movies
              </h3>
            </div>
          )}
        </div>

        <div className="common-ques border border-white rounded-lg hover:bg-[#2D2D2D] gap-4 flex flex-col p-2 ">
          <div className="question flex items-center gap-2 ">
            <button className="" onClick={() => setshow3(!show3)}>
              <Plus
                className={`invert transition-all duration-300 ${
                  show3 ? "rotate-45" : "rotate-0"
                } `}
                width={40}
                height={40}
              />
            </button>
            <h3>what’s benefit is given to it’s creators </h3>
          </div>
          {show3 && (
            <div className="answer my-2 mx-8 flex flex-col gap-2 ">
              <h3 className="text-3xl!">
                Creators can host their site for free with embedded links
              </h3>
              <h3 className="">
                and will get full credits and donations from viewers .{" "}
              </h3>
            </div>
          )}
        </div>

        <div className="common-ques border border-white rounded-lg hover:bg-[#2D2D2D] gap-4 flex flex-col p-2 ">
          <div className="question flex items-center gap-2 ">
            <button className="" onClick={() => setshow4(!show4)}>
              <Plus
                className={`invert transition-all duration-300 ${
                  show4 ? "rotate-45" : "rotate-0"
                } `}
                width={40}
                height={40}
              />
            </button>
            <h3>Is SOLIUM free ?</h3>
          </div>

          {show4 && (
            <div className="answer my-2 mx-8 ">
              <h3 className="text-3xl!">
                {" "}
                YES, SOLIM is totally free for creators and users .{" "}
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommonQuestion;
