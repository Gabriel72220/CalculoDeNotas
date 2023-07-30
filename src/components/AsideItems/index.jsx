import React, { useState } from 'react';
import './asideitems.scss';
import { Trash } from '@phosphor-icons/react';

const AsideItems = (props) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (botao) => {
      setSelected(botao)
  }
  return (
    <aside id={props.id} className='aside-container'>
        {props.pai ? <button id='responsavel' className='list-item'>{props.pai}</button> : null}
        <p id='title-dependentes'>Dependentes Associados:</p>
        <button className={`list-item ${selected==1 ? 'destacado' : ''}`} onClick={() => handleSelect(1)}>José {props.pai ? <Trash className="icon-delete" color='black' weight='fill'/> : null}</button>
        <button className={`list-item ${selected==2 ? 'destacado' : ''}`} onClick={() => handleSelect(2)} >Fernando {props.pai ? <Trash className="icon-delete" color='black' weight='fill'/> : null}</button>
        <button className={`list-item ${selected==3 ? 'destacado' : ''}`} onClick={() => handleSelect(3)}>Gabriel {props.pai ? <Trash className="icon-delete" color='black' weight='fill' /> : null}</button>

    </aside>

  );
}


export default AsideItems;