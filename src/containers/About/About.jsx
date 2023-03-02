import React from "react";
import { InfoCard } from "../../components";
import { motion } from "framer-motion";
// import "./About.scss";

import { data } from "./data";

const { Formación, Experiencia, Pasatiempos } = data;

const About = () => {
  return (
    <section id="Acerca de mi" className="about-section">
      <div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="about-title-container"
        >
          <p>un poco</p>
          <h2>Acerca de mi</h2>
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="info-cards-container"
        >
          <InfoCard
            field={"Formación"}
            name1={Formación[0].Nombre}
            name2={Formación[1].Nombre}
            name3={Formación[2].Nombre}
            name4={Formación[3].Nombre}
            title1={Formación[0].Titulo}
            title2={Formación[1].Titulo}
            title3={Formación[2].Titulo}
            title4={Formación[3].Titulo}
          />
          <InfoCard
            field={"Experiencia"}
            name1={Experiencia[0].Nombre}
            name2={Experiencia[1].Nombre}
            title1={Experiencia[0].Titulo}
            title2={Experiencia[1].Titulo}
          />
          <InfoCard
            field={"Pasatiempos"}
            name1={Pasatiempos[0].Nombre}
            name2={Pasatiempos[1].Nombre}
            title1={Pasatiempos[0].Titulo}
            title2={Pasatiempos[1].Titulo}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
