import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "a3w6f2kyngna",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image, description, github } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, img, title, description, url, github };
      });
      setProjects(projects);
      setLoading(false);
    } catch (response) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
