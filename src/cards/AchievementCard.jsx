const AchievementCard = ({ img, title, date }) => {
  return (
    <article className="rounded-xl bg-white relative overflow-hidden">
      <div className="absolute top-2 right-2 bg-white text-black p-1 rounded-md">
        {date}
      </div>
      <img src={img} alt={img} className="w-full" />
      <div className="p-3 text-black">
        <h1 className="flex text-center text-sm leading-loose mx-3 sm:text-base">
          {title}
        </h1>
      </div>
    </article>
  );
};
export default AchievementCard;
