import React from "react";
import Burger from "./Burger";
import * as s from "./Navbar.styled";

const navLink = [
  { name: "Home", url: "/home" },
  { name: "Contact", url: "/contact" },
];

const Navbar = () => {
  return (
    <s.NavContainer>
      <s.NavSeccion1>
        {navLink.map((link, index) => (
          <s.NavLink key={index} to={link.url}>
            {link.name}
          </s.NavLink>
        ))}
        <s.InputSearch placeholder='Buscar' >

        </s.InputSearch>
      </s.NavSeccion1>

      <s.NavSeccion2></s.NavSeccion2>
      <Burger />
    </s.NavContainer>
  );
};

export default Navbar;
