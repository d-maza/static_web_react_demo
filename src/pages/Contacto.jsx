import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Logo from "../components/Logo/Logo";
import Footer from "../components/Footer/Footer";
import Formulario from "../components/Formulario/Formulario";
import InfoContacto from "../components/InfoContacto/InfoContacto";

export default function Contacto() {
  return (
    <div className="phater">
      <div className="cabecera">
        <Logo />
        <Navbar />
      </div>
      <div className="wrapper">
        <div className="contaner m-0">
          <div className="row mx-auto ">
            <div className="col-6 mt-4">
              <Formulario />
            </div>
            <div className="col-4 mt-4">
              <InfoContacto />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
