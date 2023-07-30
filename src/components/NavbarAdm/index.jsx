import React from 'react';
import "./navbar-adm.scss";
import { Link } from 'react-router-dom';
const NavbarAdm = () => {
  return(
    
    <>
    
        <nav id='navbar'>
        <Link to="" className='text'><h1 id="texto">Novo cadastro</h1></Link>
        <Link to=""className='text'> <h1 id="texto">Deletar cadastro</h1></Link>
        <Link to=""className='text'> <h1 id="texto">Editar cadastro</h1></Link>
              
            
        </nav>
    </>
  )
}

export default NavbarAdm;