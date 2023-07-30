import React from 'react';
import "../styles/global.scss"
import NavbarAdm from '../components/NavbarAdm';
import EditarCadastro from '../components/EditarCadastro';
const EditarAdm = () => {

  /*const findTwoHighestNotes = () => {
    const notas = [nota1Value, nota2Value, nota3Value]; // Use as variáveis aqui
    notas.sort((a, b) => b - a);
    return notas.slice(0, 2); // Retorna um array com as duas maiores notas
  };*/
 return(
    <>
      
      <NavbarAdm />
      <EditarCadastro />

    </>
  )
}

export default EditarAdm;