import React from 'react';
import "./Editar-cadastro.scss";
import {PencilLine} from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
const EditarCadastro = () => {
    const Nome='Nome'
    const Tel='Tel'
  return (

    <>
      <div id='form_del'>
        <h1 id='formulario'>Editar cadastro</h1>
      </div>
      <div className='container'>
        <div id="Pessoas_Edit">
            
            <p className="nome">{Nome} </p>
            <p className="tel"> {Tel}</p>
            <Link to=""> <PencilLine size={32} /></Link>
        
        </div>
        <div id="Pessoas_Edit">
            <p className="nome">{Nome} </p>
            <p className="tel"> {Tel}</p>
            <Link to=""><PencilLine size={32} /></Link>
            
        </div>

    </div>
     
    </>
  )
}

export default EditarCadastro;