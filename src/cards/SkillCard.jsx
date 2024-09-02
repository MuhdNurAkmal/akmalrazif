const SkillCard = ({ id, title, icon }) => {
  return (
    <article
      key={id}
      className="flex flex-col items-center justify-center sm:hover:scale-125"
    >
      <div className="mb-2 sm:mb-2">{title}</div>
      <p className="h-24">{icon}</p>
    </article>
  );
};
export default SkillCard;
