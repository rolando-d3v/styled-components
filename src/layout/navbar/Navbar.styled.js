import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  width: 100%;
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavSeccion1 = styled.div``;


export const InputSearch = styled.input``;

export const NavSeccion2 = styled.div``;

export const NavLink = styled(Link)`
  color: #424242;
  text-decoration: none;
  font-size: 1em;
  font-weight: 600;
  outline: none;
`;
