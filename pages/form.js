import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const router = useRouter();
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_du1n25o",
        "template_jjxy5u5",
        formRef.current,
        "user_kLOcUC3tVsUeBCDKPMHks"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="min-h-[100vh] overflow-hidden relative">
      <Head>
        <title>Portfolio | Amit P John | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="absolute left-0 bottom-0 top-0 right-0">
        <div
          onClick={() => router.push("/")}
          className="absolute left-2 top-3 md:left-10 md:top-7 shadow-md bg-portfolio-dark w-10 h-10 md:w-14 md:h-14 text-xl flex items-center justify-center rounded-full text-red-50 z-50"
        >
          <i className="bx bxs-left-arrow"></i>
        </div>
        <img
          className="cover h-full w-full"
          objectFit="contain"
          src="/images/bg.jpg"
          alt=""
        />
        <div className="absolute left-0 bottom-0 top-0 right-0 bg-portfolio-dark opacity-95" />
      </div>
      <div className="absolute left-0 bottom-0 top-0 right-0 flex-col lg:flex-row flex gap-14 items-center justify-center">
        <div className="flex flex-col gap-12 lg:gap-20">
          <div className="text-gray-100 mx-auto md:mx-0  md:-mt-12 mt-1  text-5xl">
            Say hello
          </div>
          <p className="text-gray-500 text-md mx-auto md:mx-0 w-[90%] md:w-[470px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            vitae. Quibusdam sint iste corporis tempora fugit deleniti,
            voluptatum porro?
          </p>
          <div className="text-gray-500 flex mx-auto md:mx-0 gap-4 text-2xl">
            <i className="bx bxl-github hover:text-portfolio-light transitions duration-200"></i>
            <i className="bx bxl-instagram hover:text-portfolio-light transitions duration-200"></i>
            <i className="bx bxl-twitter hover:text-portfolio-light transitions duration-200"></i>
            <i className="bx bxl-twitch hover:text-portfolio-light transitions duration-200"></i>
            <i className="bx bxl-linkedin hover:text-portfolio-light transitions duration-200"></i>
          </div>
        </div>

        <form
          className="flex flex-col gap-7 items-center text-gray-300"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <input
            className="bg-transparent outline-none pb-2 border-b border-gray-500 w-96"
            type="text"
            placeholder="What's your name ?"
            name="user_name"
            autoComplete="off"
          />
          <input
            className="bg-transparent outline-none pb-2 border-b border-gray-500 w-96"
            type="text"
            placeholder="Type your query here"
            name="user_subject"
            autoComplete="off"
          />
          <input
            className="bg-transparent outline-none pb-2 border-b border-gray-500 w-96"
            type="text"
            placeholder="Enter your Mail Id"
            name="user_email"
            autoComplete="off"
          />
          <textarea
            className="bg-transparent outline-none pb-2 border-b border-gray-500 w-96"
            rows="2"
            placeholder="Your Message"
            name="message"
          ></textarea>

          <button className="relative mt-7 inline-flex items-center justify-center p-4 px-7 py-2 overflow-hidden font-medium text-red-500 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Send Now
            </span>
            <span className="relative invisible">Send Now</span>
          </button>

          {done && (
            <div className="text-gray-500 w-96 px-3 flex items-center justify-center py-5 bg-gray-100 rounded">
              <i className="bx bx-mail-send text-3xl text-gray-500 pr-5"></i>
              Thank your for contacting
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
