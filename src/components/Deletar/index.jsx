import React from 'react';
import "./deletar.scss";
import {Trash} from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
const Deletar = () => {
    const Nome='Nome'
    const Tel='Tel'
  return (

    <>
      <div id='form_del'>
        <h1 id='formulario'>Deletar Cadastro</h1>
      </div>
      <div className='container'>
        <div id="Pessoas_Del">
            
            <p className="nome">{Nome} </p>
            <p className="tel"> {Tel}</p>
            <Link to=""><Trash size={32} color="black" weight="fill"className='Lixo_del' /> </Link>
        
        </div>
        <div id="Pessoas_Del">
            <p className="nome">{Nome} </p>
            <p className="tel"> {Tel}</p>
            <Link to=""><Trash size={32} color="black" weight="fill"className='Lixo_del' /> </Link>
            
        </div>

    </div>
     
    </>
  )
}

export default Deletar;