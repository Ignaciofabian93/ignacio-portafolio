import React, { useState } from "react";
import { Button } from "../../components";
import { BsEnvelopeFill } from "react-icons/bs";

const Contact = ({ setOpen }) => {
  const [data, setData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando mensaje");
    fetch("/api/contacto", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Enviado");
        setData({
          nombre: "",
          correo: "",
          mensaje: "",
        });
        // setOpen(true);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  console.log(data);

  return (
    <div className="form-container">
      <div className="contact-title">
        <p>Envíame un</p>
        <h2>Mensaje</h2>
      </div>
      <div className="contact-text">
        <p>También puedes seguirme en redes sociales</p>
      </div>
      <div className="envelope-icon rotate-vert-center">
        <BsEnvelopeFill size={30} />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          name="nombre"
          placeholder="Ingresa nombre"
          minLength={3}
          onChange={handleChange}
          required
        />
        <input
          className="email"
          type="email"
          name="correo"
          placeholder="Ingresa correo"
          minLength={10}
          onChange={handleChange}
          required
        />
        <textarea
          className="message"
          name="mensaje"
          placeholder="Escribe un mensaje"
          minLength={10}
          onChange={handleChange}
          required
        ></textarea>
        <Button type={"submit"} className={"primary"}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Contact;
