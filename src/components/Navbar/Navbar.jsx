import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

// import "./Navbar.scss";

const menuItems = [
  "Inicio",
  "Acerca de mi",
  "Habilidades",
  "Proyectos",
  "Contacto",
];

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="nav">
      <span className="logo">Ignacio Rodríguez Rulas</span>
      <ul className="menu">
        {menuItems.map((item) => (
          <li className="menu-item" key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="menu-icon">
        <HiMenu size={24} onClick={toggle} />
      </div>
      <ul
        className="sidebar"
        style={{ transform: open ? "translateX(220px)" : "translateX(0)" }}
      >
        {menuItems.map((item) => (
          <li className="menu-item" key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
