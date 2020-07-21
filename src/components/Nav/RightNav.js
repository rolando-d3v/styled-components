import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  display: flex;
  align-items: center;

  li {
    padding: 18px 10px;
  }

  a {
    text-align: center;
    width: 4em;
    color: #000;
    max-width: 4em;
    padding: 1.2em 0.8em;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      border-bottom: 2px solid blue;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0px;
    right: 0;
    width: 18em;
    padding-left: 0;
    margin-top: 0;
    margin-left: 0;
    transition: all 0.2s linear;
    /* opacity: 0.8; */
    /* transition: transform 0.4s; */

    a {
    text-align: center;
    width: 16.25em;
    color: #fff;
    max-width: 100%;
    padding: 1em 0.8em;
    text-decoration: none;

    &:nth-child(1) {
      margin-top: 3.5em;
    }

    &:hover {
      background: #3282b8;
      border-bottom: 0px solid;
      color: black;
    }
  }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/" >Home</Link>
      <Link to="/compo01" >Compo01</Link>
      <Link to="/compo01" >Sign In</Link>
      <Link to="/compo01" >Sign Up</Link>
    </Ul>
  );
};

export default RightNav;
