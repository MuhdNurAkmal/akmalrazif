const SkillCard = ({ id, title, icon }) => {
  return (
    <article key={id} className="flex flex-col items-center justify-center">
      <div className="mb-2">{title}</div>
      <span>{icon}</span>
    </article>
  );
};
export default SkillCard;