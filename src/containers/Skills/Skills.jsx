import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./Skills.module.scss";

import { skillsData } from "./skillsData";

const categories = [
  "Frontend",
  "Backend",
  "Móvil",
  "Diseño",
  "Control de versiones",
  "Todas",
];

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
    <section id="Habilidades" className={styles.skillsSection}>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.skillsSectionTitle}
      >
        <span>
          Mis <h2>Habilidades</h2> y <h2>conocimientos</h2>
        </span>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.categoriesMenu}
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
        className={styles.skillsContainer}
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
              className={styles.skillCard}
            >
              <Image src={src} alt={name} />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default Skills;
