import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import lalaaji from "@/public/lalaaji.png";
import sayeagle from "@/public/sayeagle.png";
import shoeStore from "@/public/shoe-store.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Frontend Developer",
    location: "Tungsten Software Services",
    description:
      "After graduation I got a job at Tungsten Software Services as a junior frontend developer",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "React Developer",
    location: "Topcamp Bootcamp",
    description:
      "I have done a React course for Tompcamp Bootcamp which was onsite course.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "React Developer",
    location: "SayEagle",
    description:
      "I'm now a React developer in sayeagle. My stack includes React, TypeScript, Antd, and Firebase. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Block Chain",
    description:
      "I worked as a full-stack developer on this project from youtube",
    tags: ["React", "Tailwind", "MetaMask"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Lalaaji",
    description:
      "It is ecommerce website.I was the junior front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Node.js", "Tailwind", "Redux"],
    imageUrl: lalaaji,
  },
  {
    title: "SayEagle",
    description:
      "I worked as a react developer. A public web app to manage properties. It has five portals for tenants, vendors, owners, property managers and admin",
    tags: ["React", "Node.js", "Firebase", "Ant Design", "Redux"],
    imageUrl: sayeagle,
  },
  {
    title: "Shoe Store",
    description:
      "I worked as a react frontend developer on this project in bootcamp",
    tags: ["React", "redux", "html/css"],
    imageUrl: shoeStore,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "AntDesign",
  "Bootstarp",
  "GitHub",
  "BitBucket",
  "Jira",
  "Postman",
  "Api-Integration",
  "Firebase",
] as const;
