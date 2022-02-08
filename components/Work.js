import { useState } from "react";

import { headings, works } from "../constant/data";
import { Heading } from "./index";

const Work = () => {
  const [visible, setVisible] = useState(6);
  const [value, setValue] = useState("Show More");
  console.log(value);
  const setVisibleItems = () => {
    if (value === "Show More") {
      setVisible((prevValue) => prevValue + 3);
      setValue("Show Less");
    } else {
      setVisible((prevValue) => prevValue - 3);
      setValue("Show More");
    }
  };
  return (
    <div
      id="work"
      className="md:h-[calc(1400px-80px)] my-4 px-7 py-10 flex flex-col justify-center items-center bg-portfolio-dark"
    >
      <Heading text={headings[3].text} />
      <div className="flex flex-col md:flex-row flex-wrap md:w-[1100] xl:w-[1500px] justify-center">
        {works.slice(0, visible).map((item, index) => (
          <div
            className="bg-[ hsl(216, 50%, 16%)] shadow-lg w-96 h-80 m-5 rounded-md px-7 hover:translate-y-[-20px] transition duration-200"
            key={index}
          >
            <div className="flex items-center justify-between p-2">
              <div>
                <i className="bx bxs-folder text-portfolio-light text-5xl"></i>
              </div>
              <div className="text-gray-500">
                <i className="bx bxl-github text-2xl mr-2"></i>
                <a href={item.link}>
                  <i className="bx bx-link-external text-2xl" />
                </a>
              </div>
            </div>
            <div className="text-lg font-medium text-gray-300 pb-2">
              {item.title}
            </div>
            <div className="text-gray-500 leading-[24px] text-[16px]">
              {item.desc}
            </div>
            <div className="flex justify-evenly pt-4 text-gray-500 text-sm flex-wrap">
              {item.tech.map((data) => (
                <p>{data}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        onClick={setVisibleItems}
        className="relative mt-7 px-5 py-2 font-medium text-white group"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-400 group-hover:bg-red-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-500 group-hover:bg-red-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
        <span className="relative">{value}</span>
      </a>
    </div>
  );
};

export default Work;
