import AchievementCard from "../cards/AchievementCard";
import { useFetchAchievements } from "../data/fetchActivity";

const Achievement = () => {
  const { loading, achievements } = useFetchAchievements();
  return (
    <section className="py-24 mt-5">
      <div>
        <div className="grid gap-8 sm:grid-cols-3">
          {achievements.map((achievement) => {
            return <AchievementCard key={achievement.id} {...achievement} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Achievement;
