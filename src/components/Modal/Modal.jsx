import React from "react";
import { Button } from "../../components";

// import "./Modal.scss";

const Modal = ({ onClick, setOpen }) => {
  return (
    <div className="modal-container">
      <div className="modal-text">
        <h4>Mensaje enviado con éxito</h4>
        <p>Me pondré en contacto a la brevedad</p>
        <Button className={"primary"} onClick={() => setOpen(false)}>
          Cerrar
        </Button>
      </div>
    </div>
  );
};

export default Modal;
