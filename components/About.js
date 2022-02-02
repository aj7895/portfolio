// components
import { Heading } from "./index";

// data
import { skills } from "../constant/data";

const About = ({ data }) => {
  return (
    <div
      id="about"
      className="h-[calc(70vh-80px)] bg-portfolio-dark px-7 pb-20 md:px-0 flex flex-col items-center justify-center text-gray-500"
    >
      <Heading text={data[0].text} id={data[0].id} />
      <div className=" w-full md:w-[670px]">
        <p>
          Hello! My name is Amit and I enjoy creating things that live on the
          internet. My interest in web development started back in 2015 when I
          decided to try editing wordpress themes using elementor — turns out
          hacking together a custom reblog button taught me a lot about HTML &
          CSS! Fast-forward to today, My main focus these days is building
          projects,specifically wordpress to some of my clients.I am currently
          learning angular, and building a car rental web site using using
          express at backend & React as frontend and mongoDb as the database.
        </p>

        <div className="flex flex-wrap my-4">
          {skills.map(({ name }) => (
            <p
              key={name}
              className=" mr-2 mt-4 bg-gray-100 rounded-full px-3 py-1 text-center text-gray-900 font-semibold text-sm"
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
