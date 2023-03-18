import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Logo/Logo";
import "./Inicio.scss";

export default function Inicio() {
  return (
    <div className="phater">
      <div className="cabecera">
        <Logo />
        <Navbar />
      </div>
      <div className="wrapper">
        <div className="card bg-dark text-light mt-5 mx-auto w-25 p-3">
          <img
            className="mx-auto my-3 w-50"
            src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
            alt="logo"
          />
          <p className="text-center text-secondary mb-3">🎂🍰🥧🥐🥖🥨🥞🍩🍪</p>
          <hr />
          <h5 className="text-center  fw-semibold mt-3 ">
            This is a small Demo page of a SPA created in React 18
          </h5>
          <h6 className="text-center  fw-semibold my-3">Enjoy.. David Maza</h6>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
