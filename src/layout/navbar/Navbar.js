import React from "react";
import * as s from "./Navbar.styled";
import * as FaIcons from "react-icons/fa";

const navLink = [
  { name: "Home", url: "/home" },
  { name: "Contact", url: "/contact" },
];

export default function Navbar({open, setOpen}) {
 
  return (
    <s.NavContainer>
      <s.NavSeccion1>
        <FaIcons.FaBars style={{ fontSize: "25px" }} onClick={() => setOpen(!open)} />
        {navLink.map((link, index) => (
          <s.NavLink key={index} to={link.url}>
            {link.name}
          </s.NavLink>
        ))}

        <s.ContenInput>
          <s.InputSearch placeholder="Buscar" />
          <s.IconSearch />
        </s.ContenInput>
      </s.NavSeccion1>

      <s.NavSeccion2></s.NavSeccion2>
    </s.NavContainer>
  );
};


