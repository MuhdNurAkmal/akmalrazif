import { nanoid } from "nanoid";
import webdev from "../assets/webdev.svg";
import appdev from "../assets/appdev.svg";
import aidev from "../assets/aidev.svg";
import kmpk from "../assets/logo-kmpk.png";
import ukm from "../assets/logo-ukm.png";
import amic from "../assets/logo-amic.png";
import crescita from "../assets/logo-crescita.png";

export const links = [
  { id: nanoid(), href: "/", text: "" },
  { id: nanoid(), href: "about", text: "about" },
  { id: nanoid(), href: "skills", text: "skills" },
  { id: nanoid(), href: "projects", text: "works" },
];

export const experiences = [
  {
    id: nanoid(),
    title: "Full Stack Developer",
    location: "Crescita Technology (M) Sdn Bhd",
    desc: "Responsible for full-stack web application development, including design, implementation, testing, and deployment. Focused on building user-friendly interfaces and scalable, secure backend systems while ensuring optimal performance and reliability. Experienced in developing real-time sensor monitoring and management systems to enable continuous data updates and improve operational efficiency. Proficient in automating data acquisition using Node-RED and IoT to minimize manual intervention and streamline workflows.",
    date: "Oct 2024 - Mar 2025",
    logo: crescita,
  },
  {
    id: nanoid(),
    title: "Full Stack Developer",
    location: "Freelance",
    desc: "Working as a freelance full stack developer on various projects, focusing on web and mobile application development. Engaged in both frontend and backend development tasks to create functional and user-friendly applications. Collaborated closely with clients to discuss project requirements and UI design, ensuring the final product aligns with their vision and needs.",
    date: "Aug 2023 - Mar 2025",
  },
  {
    id: nanoid(),
    title: "Research Assistant Intern (Computer Vision)",
    location: "Aerospace Malaysia Innovation Centre (AMIC), Kajang",
    desc: "A 5-month internship involved developing an advanced aircraft part identification model using the OS2D architecture, engineered a pathfinder algorithm specifically designed for high-mix, low-volume scenarios. Combining these innovations into 'PathGen', an integrated solution that guides the UR10 robot for precise spraying and enhancing overall operational efficiency.",
    date: "Sep 2023 - Jan 2024",
    logo: amic,
  },
  {
    id: nanoid(),
    title: "Bachelor of Computer Science (Hons)",
    location: "Universiti Kebangsaan Malaysia (UKM), Bangi",
    desc: "Graduated with a strong foundation in software development, web development, data science, and artificial intelligence, equipping me with advanced skills and knowledge in these areas.",
    date: "Oct 2020 - Aug 2024",
    logo: ukm,
  },
  {
    id: nanoid(),
    title: "Matriculation Science (Modul II)",
    location: "Kolej Matrikulasi Perak (KMPk), Gopeng",
    desc: "Completed Science Modul II at Kolej Matrikulasi Perak, focusing on fundamental scientific principles and preparation for higher education in the field of science and technology.",
    date: "May 2019 - May 2020",
    logo: kmpk,
  },
];

export const interests = [
  {
    id: nanoid(),
    title: "Web Development",
    icon: webdev,
  },
  {
    id: nanoid(),
    title: "Mobile Application Development",
    icon: appdev,
  },
  {
    id: nanoid(),
    title: "Artificial Intelligence",
    icon: aidev,
  },
];
