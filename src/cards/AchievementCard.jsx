const AchievementCard = ({ img, title, date }) => {
  return (
    <article className="relative overflow-hidden">
      <div className="absolute top-2 right-2 bg-white text-black p-2 rounded-md">
        {date}
      </div>
      <img src={img} alt={img} className="w-full rounded-xl" />
      <div className="p-3">
        <h1 className="flex text-center text-base leading-loose mx-3 sm:text-lg">
          {title}
        </h1>
      </div>
    </article>
  );
};
export default AchievementCard;
