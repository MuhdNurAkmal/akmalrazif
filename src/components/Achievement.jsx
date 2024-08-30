import AchievementCard from "../cards/AchievementCard";
import { useFetchAchievements } from "../data/fetchActivity";

const Achievement = () => {
  const { loading, achievements } = useFetchAchievements();
  return (
    <section className="py-24 mt-5">
      <div>
        <h1 className="font-mono text-lg text-center mb-16 tracking-wide italic sm:text-3xl">
          "Successful people are not gifted, they just work hard, then succeed
          on purpose."
        </h1>
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
