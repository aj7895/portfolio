import { useState } from "react";

import { Heading } from "./index";
import { links } from "../constant/data";

const Education = ({ Education, Certificate }) => {
  // toggling tab
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div
      id="exp"
      className="h-[calc(70vh-80px)] px-7 py-10 flex flex-col items-center bg-portfolio-dark"
    >
      <Heading text={links[1].text} id={links[1].id} />

      <div className="flex flex-col md:flex-row gap-20 relative">
        <div className=" hidden md:inline-flex h-[185px] w-[1px] bg-gray-400 absolute" />
        {/* tab */}
        <div className="flex flex-row md:flex-col gap-10">
          <button
            className={toggleState === 1 ? "activetab" : "text-gray-300"}
            onClick={() => toggleTab(1)}
          >
            Education
          </button>
          <button
            className={toggleState === 2 ? "activetab" : "text-gray-300"}
            onClick={() => toggleTab(2)}
          >
            Certifications
          </button>
          <button
            className={toggleState === 3 ? "activetab" : "text-gray-300"}
            onClick={() => toggleTab(3)}
          >
            Work
          </button>
        </div>
        {/* tab */}

        {/* content */}
        <div className="flex">
          <div className={toggleState === 1 ? "w-96 active-content" : "hidden"}>
            {Education.map((item) => (
              <div
                key={item.id}
                className="flex items-center text-gray-500 my-3"
              >
                <i className="bx bxs-right-arrow text-portfolio-light mr-5"></i>
                <div className="flex flex-col">
                  <p>{item.degree}</p>
                  <p>{item.uni}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={toggleState === 2 ? "w-96  active-content" : "hidden"}
          >
            {Certificate.map((item) => (
              <div
                key={item.id}
                className="flex items-center text-gray-500 my-3"
              >
                <i className="bx bxs-right-arrow text-portfolio-light mr-5"></i>
                <div className="flex flex-col">
                  <p>{item.course}</p>
                  <p>{item.from}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "hidden"}
          >
            <p className="w-96 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
