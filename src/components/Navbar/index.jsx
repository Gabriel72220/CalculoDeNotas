import React from 'react';
import "./navbar.scss";
import { SignOut } from '@phosphor-icons/react';
import logo from '../../assets/logo.png'

const Navbar = () => {
  //const nome = "jose";
  return (
    <>
      <nav id='navbar'>
        <div id="fake-content"></div>
        <img src={logo} alt="Logo" id='logo'/>
        <div class="linha-horizontal"></div>
      </nav>
    </>
  )
}

export default Navbar;
