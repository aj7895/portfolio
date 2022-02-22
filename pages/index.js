import Head from "next/head";
import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
// components
import {
  Header,
  Hero,
  About,
  Work,
  Education,
  Contact,
} from "../components/index";

// data
import { headings, eduData, cerData } from "../constant/data";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="relative bg-portfolio-dark">
      <Head>
        <title>Portfolio | Amit P John | Frontend Developer</title>
        <link rel="icon" href="/images/favicon.png" />
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      {/* Header */}

      <Header />
      <main className="flex justify-center relative bg-portfolio-dark">
        {/* left */}
        <div className="hidden fixed lg:flex flex-col bottom-0 left-20">
          <div className="flex flex-col gap-3 text-2xl mb-8">
            <p className="bx bxl-github icon"></p>
            <p className="bx bxl-instagram icon"></p>
            <p className="bx bxl-twitter icon "></p>
            <p className="bx bxl-twitch icon"></p>
            <p className="bx bxl-linkedin icon"></p>
          </div>
          <div className="w-[1px] bg-gray-400 h-48 ml-2" />
        </div>
        {/* middle */}
        <div className="overflow-hidden mx-auto w-[100vw] flex flex-col gap-40 sm:gap-20 lg:gap-0">
          <Hero />
          <Work />
          <About data={headings} />
          <Education Education={eduData} Certificate={cerData} />
          <Contact />
        </div>
        {/* right */}
        <div className="hidden fixed lg:flex flex-col bottom-0 right-2 items-center">
          <p className="text-gray-400 text-md rotate-90 tracking-widest mb-24">
            amit.john@aol.com
          </p>
          <div className="w-[1px] h-48 bg-gray-400 mr-2" />
        </div>
        {/* scroll up */}
        {showScroll && (
          <a
            href="#"
            className=" fixed right-3 bottom-14 bg-portfolio-blue text-gray-50 shadow-2xl h-14 flex items-center justify-center rounded-full w-14"
          >
            <i className="bx bx-up-arrow" />
          </a>
        )}
      </main>
    </div>
  );
}
