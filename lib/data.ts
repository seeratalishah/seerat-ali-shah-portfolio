import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import lalaaji from "@/public/lalaaji.png";
import sayeagle from "@/public/sayeagle.png";
import shoeStore from "@/public/shoe-store.png";
import { AiFillHtml5, AiOutlineGithub, AiFillApi } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiMongodb, SiRedux, SiExpress, SiAntdesign, SiBootstrap, SiBitbucket, SiJira, SiPostman, SiFirebase } from "react-icons/si";
import { ImGit } from "react-icons/im";

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
    icon: React.createElement(FaReact),
    date: "2021",
  },
  {
    title: "React Developer",
    location: "Topcamp Bootcamp",
    description:
      "I have done a React course for Tompcamp Bootcamp which was onsite course.",
    icon: React.createElement(FaReact),
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
] as const;

export const skillsData = [
  {skill: "HTML", icon: React.createElement(AiFillHtml5), color: "html-icon"},
  {skill: "CSS", icon: React.createElement(IoLogoCss3), color: "css-icon"},
  {skill: "JavaScript", icon: React.createElement(SiJavascript), color: "js-icon"},
  {skill: "TypeScript", icon: React.createElement(SiTypescript), color: "ts-icon"},
  {skill: "React", icon: React.createElement(SiReact), color: "react-icon"},
  {skill: "Node.js", icon: React.createElement(IoLogoNodejs), color: "node-icon"},
  {skill: "Git", icon: React.createElement(ImGit), color: "git-icon"},
  {skill: "Tailwind", icon: React.createElement(SiTailwindcss), color: "tw-icon"},
  {skill: "MongoDB", icon: React.createElement(SiMongodb), color: "md-icon"},
  {skill: "Redux", icon: React.createElement(SiRedux), color: "redux-icon"},
  {skill: "Express", icon: React.createElement(SiExpress), color: "express-icon"},
  {skill: "AntDesign", icon: React.createElement(SiAntdesign), color: "antd-icon"},
  {skill: "Bootstrap", icon: React.createElement(SiBootstrap), color: "bs-icon"},
  {skill: "GitHub", icon: React.createElement(AiOutlineGithub), color: "gh-icon"},
  {skill: "BitBucket", icon: React.createElement(SiBitbucket), color: "bb-icon"},
  {skill: "Jira", icon: React.createElement(SiJira), color: "jira-icon"},
  {skill: "Postman", icon: React.createElement(SiPostman), color: "pm-icon"},
  {skill: "RESTful-Api-Integration", icon: React.createElement(AiFillApi), color: "api-icon"},
  {skill: "Firebase", icon: React.createElement(SiFirebase), color: "fb-icon"},
] as const;
