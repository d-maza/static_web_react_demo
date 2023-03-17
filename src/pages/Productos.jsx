import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Logo/Logo";
import Cards from "../components/Cards/Cards";

export default function Productos() {
  return (
    <div className='phater'>
        <div className="cabecera">
        <Logo />
       <Navbar />
    </div>
      <div className="wrapper">
        <Cards />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    
  )
}
