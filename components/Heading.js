const Heading = ({ text, id }) => {
  return (
    <div className="flex w-full md:w-auto mb-10 items-center">
      <div className="text-gray-200 flex items-center">
        {id && (
          <span className="text-portfolio-light font-semibold">{id}.</span>
        )}
        <p className="text-2xl px-2">{text}</p>
      </div>
      <div className="bg-gray-500 w-96 h-[1px] rounded-full ml-20" />
    </div>
  );
};

export default Heading;
