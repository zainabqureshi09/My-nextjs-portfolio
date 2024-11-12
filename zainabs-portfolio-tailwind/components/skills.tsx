"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { techData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {Object.values(techData).map((skill, index) => (
          <motion.li
            className=" "
            key={skill.name}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={index}
          >
            <img
              className="border border-blue-800 rounded shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
              src={skill.url}
              alt={skill.name}
              title={`${skill.type}: ${skill.description}`}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
