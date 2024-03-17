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
      Transitioning from sound engineering into web development, my passion for coding is as deep as my roots in music. After enrolling into a web development training at OpenClassroom and an intensive bootcamp at 42 School, I became really interested in solving complex problems and developing scalable solutions. Since then, I keep enhancing my skills through self-directed learning, exploring new technologies, and applying what I learn to practical projects.
      </p>

      <p>
      Continuously driven by curiosity, I thrive on learning new things, pushing my limits, and sharing my excitement for technology with others. I'm actively seeking a full-time Developer role where I can contribute meaningfully while expanding my knowledge and skills.

      Off the keyboard, I enjoy producing music and gaming—a blend of creativity and challenge.

      Eager to bring my motivation and my hardworking nature to your team!


      </p>
    </motion.section>
  );
}