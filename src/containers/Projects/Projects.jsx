import React from "react";
import { ProjectCard } from "../../components";
import { motion } from "framer-motion";

import { images } from "../../constants";

const Projects = () => {
  return (
    <section id="Proyectos">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="projects-title-container">
          <p>Mis</p>
          <h2>Proyectos</h2>
        </div>
        <div className="projects-desc-container">
          <p>
            Aquí podrán ver proyectos que he realizado con las tecnologías
            vistas en la sección anterior, además de poder visitar el sitio web
            y repositorio en GitHub.
          </p>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="project-cards"
      >
        <ProjectCard
          title={"Clon de YouTube"}
          src={images.ytclone}
          website={"https://youtube-clone-murex.vercel.app/"}
          code={"https://github.com/Ignaciofabian93/youtube-clone"}
        />
        <ProjectCard
          title={"Sitio web"}
          src={images.grupomalaga}
          website={"https://www.grupomalaga.cl/"}
          code={"https://github.com/Ignaciofabian93/Grupo-Malaga"}
        />
        <ProjectCard
          title={"Sitio web"}
          src={images.website}
          website={"https://modern-ui-ux-web-six.vercel.app/"}
          code={"https://github.com/Ignaciofabian93/Modern-UI-UX-web"}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
