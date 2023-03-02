import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { skillsData } from "./skillsData";

const categories = [
  "Frontend",
  "Backend",
  "Diseño",
  "Control de versiones",
  "Todas",
];

console.log(skillsData);

const Skills = () => {
  const [category, setCategory] = useState("");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleFilters = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "Todas") {
        setCategory("");
      } else {
        setCategory(item);
      }
    }, 500);
  };

  console.log(category);
  return (
    <section id="Habilidades" className="skills-section">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="skills-section-title"
      >
        <span>
          Mis <h2>Habilidades</h2> y <h2>conocimientos</h2>
        </span>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="categories-menu"
      >
        {categories.map((item, index) => (
          <span
            key={index}
            className="category"
            onClick={() => handleFilters(item)}
          >
            {item}
          </span>
        ))}
      </motion.div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="skills-container"
      >
        {skillsData
          .filter((item) => (category ? item.area === category : item))
          .map(({ name, src, area }) => (
            <motion.div
              key={name}
              whileHover={{ scale: [1, 1.2] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="skill-card"
            >
              <Image src={src} alt={name} />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default Skills;
