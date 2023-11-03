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
        I am, a passionate front-end developer with more than a year of hands-on experience. Dedicated to crafting responsive, user-friendly, and performance-driven. I hold
        a bachelor's degree in{" "}
        <span className="font-medium">Information Technology</span> , which has
        provided me with a solid foundation in the ever-evolving world of
        technology
      </p>
      <p className="mb-3">My journey as a front-end developer is marked by a commitment to clean and maintainable code, accessibility, and responsive design principles. I find immense satisfaction in the process of refining user interfaces and optimizing performance to deliver a delightful online experience.</p>
      <p>
        Let's collaborate to bring your digital visions to life and make the web
        a better place, one pixel at a time.
      </p>
    </motion.section>
  );
}
