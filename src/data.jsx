import { nanoid } from "nanoid";
import { FaHtml5, FaJs } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Web Development",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "This is for my web development skills",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "this is javascript",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg",
    url: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg",
    github: "https://www.github.com",
    title: "Project 1",
    text: "this s is for description",
  },
  {
    id: nanoid(),
    img: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg",
    url: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg",
    github: "https://www.facebook.com",
    title: "Project 2",
    text: "this s is for description",
  },
  {
    id: nanoid(),
    img: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg",
    url: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg",
    github: "https://www.facebook.com",
    title: "Project 2",
    text: "this s is for description",
  },
];
