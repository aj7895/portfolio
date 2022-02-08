import { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="contact" className="flex flex-col px-7 gap-7 my-7 items-center">
      <p className="text-portfolio-light">04. What's Next?</p>
      <h5 className="text-5xl font-medium text-gray-300">Get In Touch</h5>
      <p className=" w-full md:w-[570px] text-gray-500">
        Feel free to contact me,Whether you have a question or just want to say
        hi, I will try my best to get back to you!
      </p>
      <button
        onClick={() => setShow(true)}
        className="relative mt-7 px-5 py-2 font-medium text-white group"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-red-400 group-hover:bg-red-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-red-500 group-hover:bg-red-500 group-hover:-skew-x-12"></span>
        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
        <span className="relative">Contact Me</span>
      </button>

      <div className="text-gray-500 mt-44">
        <p>
          Designed in India with <i className="bx bxs-heart text-red-400"></i>
          by Amit John
        </p>
        <div className="flex justify-evenly">
          <div>
            <i className="bx bx-repost pr-1"></i>
            <a href="https://hashnode.com/@amitjohn25">Blogs</a>
          </div>
          <div>
            <i className="bx bxl-github pr-1"></i>
            <a>Github Updates</a>
          </div>
        </div>
      </div>
      <ContactForm show={show} setShow={setShow} />
    </div>
  );
};

export default Contact;
