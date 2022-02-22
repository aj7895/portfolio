const Hero = () => {
  return (
    <div class="lg:mt-[10rem] mt-[7rem] w-[100vw] mx-auto flex items-center justify-center">
      <div class="max-w-[calc(100vw-0px)] min-w-[calc(100vw-400px)] px-7 xl:mr-40 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div class="max-w-lg">
            <div class="tracking-wide flex flex-col gap-y-9 text-white">
              <p className="text-portfolio-light text-[16px] md:text-[20px]">
                Hello i am,
              </p>
              <h3 className="text-[40px] text-gray-200 leading-[48px] md:leading-[80px] tracking-wide md:text-[5.2rem] font-semibold ">
                Amit P John
              </h3>
              <p className="text-[40px] text-gray-300 font-semibold leading-[36px]">
                I build things for the web.
              </p>
            </div>
            <p class="mt-7 lg:w-[47rem] text-gray-300">
              I’m a Ui web developer specializing in designing (and developing)
              exceptional digital experiences. Currently, I'm learning angular.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              officiis veniam iusto rerum rem!
            </p>
            <div class="mt-9">
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
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-2 h-96 lg:w-1/2">
          <img
            className="object-cover w-full max-w-2xl h-full"
            src="/images/img.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
