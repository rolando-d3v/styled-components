import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 3.8em;
  background: #42424242;
  display: flex;
  justify-content: space-between;

  .logo-title {
    display: flex;
    align-items:center;
    margin-left: 1em;

    a {
      color: blue;
      font-size: 1.2em;
      font-weight: bold;
      text-decoration: none;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo-title">
        <Link to="/" >Video Games</Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
