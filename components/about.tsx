"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am, a dedicated front-end developer with a passion for creating
        captivating user experiences through the art of web development. I hold
        a bachelor's degree in{" "}
        <span className="font-medium">Information Technology</span> , which has
        provided me with a solid foundation in the ever-evolving world of
        technology
      </p>
      <p>
        With an eye for detail and a penchant for problem-solving, I thrive on
        turning design concepts into functional and user-friendly websites. I'm
        experienced in leveraging the power of HTML, CSS, and JavaScript to
        bring ideas to life, and I continually stay at the forefront of emerging
        web technologies to ensure that my creations are not only visually
        appealing but also perform seamlessly across all devices.
      </p>
      <p>
        My journey as a front-end developer is marked by a commitment to clean
        and maintainable code, accessibility, and responsive design principles.
        I find immense satisfaction in the process of refining user interfaces
        and optimizing performance to deliver a delightful online experience.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies, and playing with resin art. I also exploring the latest trends
        in web development, learning new frameworks, and embracing design
        principles to enhance my skills. I believe that technology should be
        accessible to everyone and am dedicated to creating inclusive and
        engaging web solutions.
      </p>

      <p>
        Let's collaborate to bring your digital visions to life and make the web
        a better place, one pixel at a time.
      </p>
    </motion.section>
  );
}
