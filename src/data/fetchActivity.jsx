import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "a3w6f2kyngna",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchAchievements = () => {
  const [loading, setLoading] = useState(true);
  const [achievements, setAchievements] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "activities" });
      const achievements = response.items.map((item) => {
        const { image, title, date } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, id, img, date };
      });
      setAchievements(achievements);
      setLoading(false);
    } catch (response) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, achievements };
};
