import React from "react";
import { AiOutlineEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ title, src, website, code, description }) => {
  return (
    <motion.div
      whileHover={{ scale: [1, 1.05] }}
      transition={{ duration: 0.3 }}
      className={styles.cardContainer}
    >
      <div className={styles.cardTitle}>
        <h4>{title}</h4>
      </div>
      <div className={styles.cardImgContainer}>
        <Image src={src} alt={title} />
      </div>
      <div className={styles.cardDescription}>
        <p>{description}</p>
      </div>
      <div className={styles.cardBtns}>
        <div className={styles.cardIcons}>
          <a href={website} target="_blank" rel="noreferrer">
            {website ? <AiOutlineEye size={30} /> : null}
          </a>
          <a href={code} target="_blank" rel="noreferrer">
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
