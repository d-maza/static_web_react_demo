import React from "react";
import Logo from "../Logo/Logo";
import {
  FaInstagram,
  FaFacebook,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "../InfoContacto/InfoContactoStyle.css";

const InfoContacto = () => {
  return (
    <div className="info shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h1 className="contacto">INFORMACIÓN CONTACTO</h1>
      <div>
        <div className="logo">
          <Logo />
        </div>
        <div className="opinion">
          <p>Siguenos en..</p>
        </div>
        <div className="text-inf">
          <div className="face">
            <div>
              <FaFacebook className="icono" />
            </div>
            <div>
              <a className="enlaces" href={"https://"}>
                Artisan Beard
              </a>
            </div>
          </div>
          <div className="inst">
            <div>
              <FaInstagram className="icono" />
            </div>
            <div>
              <a className="enlaces" href={"https://"}>
                Artisan Beard
              </a>
            </div>
          </div>
          <div className="emal">
            <div>
              <FaRegEnvelope className="icono" />
            </div>
            <div>
              <a
                className="enlaces"
                href={
                  "mailto:tucorreeo@gmail.com?Subject=Más%20información%20sobre%20sus%20productos"
                }
              >
                tucorreo@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="was">
              <div>
                <FaWhatsapp className="icono" />
              </div>
              <div>
                <a className="enlaces" href={"https://"}>
                  {" "}
                  +34 666 XX 66
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContacto;
