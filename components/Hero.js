const Hero = () => {
  return (
    <div className="h-[calc(100vh-80px)] pt-28 lg:pt-40 sm:mt-1 relative px-5 md:px-0 flex xl:gap-20 mx-auto text-gray-500">
      {/* left */}
      <div className="px-3 md:px-0 flex flex-col gap-8">
        <p className="text-portfolio-light text-[16px] md:text-[20px] md:-mb-5">
          Hello i am,
        </p>
        <h3 className="text-[40px] text-gray-200 leading-[48px] md:leading-[80px] tracking-wide md:text-[5.2rem] font-semibold ">
          Amit P John
        </h3>
        <p className="text-[40px] text-gray-300 font-semibold leading-[36px]">
          I build things for the web.
        </p>
        <p className="w-full text-gray-400 md:w-[670px] text-lg leading-[22px]">
          I’m a Ui web developer specializing in designing (and developing)
          exceptional digital experiences. Currently, I'm learning angular.
        </p>
        <div className="flex flex-col md:flex-row items-left px-5 md:px-0 gap-7 md:gap-20 mt-7 md:ml-0 -ml-4 lg:mt-14">
          <a
            href="#work"
            className="relative inline-flex w-[210px] lg:w-auto items-center h-[3rem] md:-mt-[0.29rem] justify-start px-6 overflow-hidden font-medium transition-all bg-red-500 rounded-md group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600  group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Check out my works
            </span>
          </a>

          <a
            href="#"
            className="border border-gray-100 h-11 flex items-center justify-center w-28 rounded text-center text-gray-100"
          >
            Hire Me
          </a>
        </div>
      </div>
      {/* right */}
      <div className=" hidden 2xl:flex relative">
        <img
          className="h-[430px] -mt-8 object-contain hover:-rotate-1 transition duration-700"
          src="/images/img.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
