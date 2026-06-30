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
    title: "Full Stack AI Developer",
    location: "Fakulti Teknologi dan Sains Maklumat (FTSM), UKM",
    desc: "Architected an enterprise-grade Medallion data pipeline (Bronze to Gold) in Microsoft Fabric, leveraging PySpark to migrate maintenance data into a Silver Lakehouse layer. Developed automated workflows using n8n and Power Automate, including a near real-time SAP-to-SharePoint integration that updates at 5-minute intervals. Additionally, engineered the backend for an OCR-driven extraction system that migrated over 50,000 historical maintenance records into SharePoint, specifically handling complex data schemas for departments including RSD, PSD, TNM, and SNC. Maintained strictly separate target tables for preventive and corrective maintenance data, and supervised a 30-member data validation team to ensure high-quality data ingestion for downstream predictive analytics.",
    date: "May 2025 - Present",
    logo: ukm,
  },
  {
    id: nanoid(),
    title: "Full Stack Developer",
    location: "Crescita Technology (M) Sdn Bhd",
    desc: "Developed a comprehensive cross-platform IoT monitoring ecosystem that integrated over six sensor types (including temperature, humidity, and CO2) into a centralized Django web dashboard for real-time operational visibility across a multi-site deployment. Built an accompanying mobile monitoring application using Flutter and Dart that consumed RESTful APIs to stream live sensor readings to multiple device types. Furthermore, designed robust Node-RED pipelines to acquire, buffer, and store time-series sensor data within MongoDB, successfully replacing manual logging processes and enabling historical trend analysis.",
    date: "Oct 2024 - Mar 2025",
    logo: crescita,
  },
  {
    id: nanoid(),
    title: "Research Assistant Intern (Computer Vision)",
    location: "Aerospace Malaysia Innovation Centre (AMIC), Kajang",
    desc: "Built and integrated an advanced OS2D-based aircraft part detection model, successfully improving identification accuracy from 50% to 65% and reducing detection time to under 10 seconds. Developed an automated spray path optimization solution for a UR10 robot by directly coupling the model's detection outputs to the pathfinding algorithm. This integrated solution provided precise spraying guidance specifically designed to enhance overall operational efficiency in high-mix, low-volume scenarios.",
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
