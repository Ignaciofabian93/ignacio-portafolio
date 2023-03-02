import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

// import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h5>Ignacio Rodríguez Rulas</h5>
      <p>Sitio desarrollado con NextJs</p>
      <div className="footer-icons">
        <Link
          href={"https://www.instagram.com/ignaciofabian.r/"}
          target="_blank"
        >
          <BsInstagram size={26} />
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/ignacio-rodr%C3%ADguez-rulas-9553b21a2/"
          }
          target="_blank"
        >
          <BsLinkedin size={26} />
        </Link>
        <Link href={"https://github.com/Ignaciofabian93"} target="_blank">
          <BsGithub size={26} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
