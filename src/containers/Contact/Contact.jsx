import React, { useState } from "react";
import { Button, Modal } from "../../components";
import { BsEnvelopeFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  const [open, setOpen] = useState(false);
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
        setOpen(true);
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
    <div id="Contacto" className="form-container">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="contact-title"
      >
        <p>Envíame un</p>
        <h2>Mensaje</h2>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="contact-text"
      >
        <p>También puedes seguirme en redes sociales</p>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="envelope-icon rotate-vert-center"
      >
        <BsEnvelopeFill size={30} />
      </motion.div>
      <motion.form
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          className="name"
          type="text"
          name="nombre"
          placeholder="Ingresa nombre"
          minLength={3}
          value={data.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="email"
          type="email"
          name="correo"
          placeholder="Ingresa correo"
          minLength={10}
          value={data.correo}
          onChange={handleChange}
          required
        />
        <textarea
          className="message"
          name="mensaje"
          placeholder="Escribe un mensaje"
          minLength={10}
          value={data.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <Button type={"submit"} className={"primary"}>
          Enviar
        </Button>
        {open ? <Modal onClick={() => setOpen(false)} /> : null}
      </motion.form>
    </div>
  );
};

export default Contact;
