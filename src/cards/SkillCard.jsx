const SkillCard = ({ id, title, icon }) => {
  return (
    <article
      key={id}
      className="flex p-2 items-center gap-4 rounded-lg bg-boxColor drop-shadow-lg hover:scale-110"
    >
      <p className="h-10 w-10">{icon}</p>
      <p className="">{title}</p>
    </article>
  );
};

export default SkillCard;
