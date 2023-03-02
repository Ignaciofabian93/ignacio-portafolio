import React from "react";
import { motion } from "framer-motion";
// import "./InfoCard.scss";

const InfoCard = ({
  name1,
  title1,
  name2,
  title2,
  name3,
  title3,
  name4,
  title4,
  field,
}) => {
  return (
    <div className="about-card-container">
      <h5 className="about-card-title">{field}</h5>
      <motion.div
        whileHover={{ scale: [1, 1.05] }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="about-card"
      >
        <div>
          <p>{name1}</p>
          <span>{title1}</span>
        </div>
        <div>
          <p>{name2}</p>
          <span>{title2}</span>
        </div>
        <div>
          <p>{name3}</p>
          <span>{title3}</span>
        </div>
        <div>
          <p>{name4}</p>
          <span>{title4}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoCard;
