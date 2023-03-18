import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Logo from "../components/Logo/Logo";
import Footer from "../components/Footer/Footer";

export default function QuienesSomos() {
  return (
    <div className="phater">
      <div className="cabecera">
        <Logo />
        <Navbar />
      </div>
      <div className="wrapper">
        <div className="row m-0">
          <div className="col-6 mx-auto">
            <img
              className="card w-75 shadow p-2 mt-5 bg-body rounded mx-auto"
              src="https://images.unsplash.com/photo-1601740982034-56bc80e986ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1629&q=80"
              alt=""
            />
            <div className="card m-4 text-center text-warning fs-5 bg-dark p-3">
              El Artisan Beard es un puequeño proyecto web DEMO relizado con
              React v-18
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
