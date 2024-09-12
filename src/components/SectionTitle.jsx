const SectionTitle = ({ text, title }) => {
  return (
    <div className="flex flex-col items-center pb-5 font-rubik font-bold tracking-wide capitalize text-center">
      <h1 className="text-4xl sm:text-5xl bg-gradientColor bg-clip-text text-transparent w-fit">
        {title}
      </h1>
      <div className="w-20 h-1 mt-3 bg-gradientColor rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
