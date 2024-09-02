const SectionTitle = ({ text, title }) => {
  return (
    <div className="pb-5 font-rubik font-bold tracking-wide capitalize text-center leading-relaxed items-center w-full sm:tracking-widest">
      <h4 className="text-2xl sm:mb-3">{text}</h4>
      <h1 className="text-4xl leading-snug sm:text-5xl text-accentText">
        {title}
      </h1>
    </div>
  );
};
export default SectionTitle;
