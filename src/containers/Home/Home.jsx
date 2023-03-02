import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../../components";
import { images } from "../../constants";

const Home = () => {
  return (
    <section id="Inicio">
      <div className="home-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="info-container"
        >
          <div className="info">
            <p>Hola!, mi nombre es</p>
            <h1>Ignacio</h1>
          </div>
          <div className="job">
            <p>Soy desarrollador web</p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="profile-img-container"
        >
          <Image src={images.yo} alt="foto" className="profile-img" priority />
        </motion.div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="CV"
        >
          <Button className={"primary"}>
            <a
              href="/src/constants/CV- Ignacio Rodríguez (español).pdf"
              download
            >
              {"Descargar CV"}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
