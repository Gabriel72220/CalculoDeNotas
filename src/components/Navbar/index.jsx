import React from 'react';
import "./navbar.scss";
import logo from "../../assets/logo.png"
import { SignOut } from '@phosphor-icons/react';

const Navbar = () => {
  //const nome = "jose";
  return(
    <>
        <nav id='navbar'>
          <div id="fake-content"></div>
            <h1 id="">Gerenciador De Pagamentos</h1>
            <div className="icon-logout">
              <SignOut id='signout-button' size={32}  /> 
            </div>
        </nav>
        <div id='espaco'>
          
        </div>
    </>
  )
}

export default Navbar;