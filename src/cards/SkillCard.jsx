const SkillCard = ({ id, icon }) => {
  return (
    <article
      key={id}
      className="flex flex-col items-center justify-center"
    >
      <span>{icon}</span>
    </article>
  );
};
export default SkillCard;
