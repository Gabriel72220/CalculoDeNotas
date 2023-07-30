import React from 'react';
import './dependent-info.scss';

const DependentInfo = (props) => {
    const preco = 120;
    const vencimento = "20/04/2023"
  return (
    <div id={props.id} className='container'>
        <h1>Gabriel Oliveira Souza</h1>
        <div id="fatura">
            <p className="preco">{preco} R$</p>
            <p className="vencimento"> {vencimento}</p>
            <p id="status-pagamento"></p>
        </div>
        <div id="fatura">
            <p className="preco">{preco} R$</p>
            <p className="vencimento"> {vencimento}</p>
            <p id="status-pagamento"></p>
        </div>

    </div>

  );
}

export default DependentInfo;