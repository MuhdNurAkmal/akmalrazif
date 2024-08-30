const SectionTitle = ({ text, icon }) => {
  return (
    <div className="pb-5 text-3xl font-bold tracking-wide capitalize text-center leading-relaxed sm:text-5xl sm:text-left">
      <h1 className="">
        {text}&nbsp;{icon}
      </h1>
    </div>
  );
};
export default SectionTitle;
