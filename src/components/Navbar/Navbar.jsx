import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Menu,
  MenuItem,
} from "../Navbar/NavbarStyle.js";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "1rem" } }}>
          <Menu>
            <MenuItem>
                <Link to="/">Inicio</Link>
              </MenuItem>
            <MenuItem>
                <Link to="/quienesSomos">Quienes Somos</Link>
              </MenuItem>
            <MenuItem>
              <Link to="/productos">Productos</Link>
              </MenuItem>
            <MenuItem>
              <Link to="/contacto">Contacto</Link>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
   
    </Container>
  );
};

export default Navbar;
