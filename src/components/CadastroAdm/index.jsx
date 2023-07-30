import React from 'react';
import "./cadastro-adm.scss";


const CadastroAdm = () => {
  return (

    <>
      <div>
        <h1 id='formulario'>Formulário de Cadastro</h1>
      </div>

      <div id='div_cadastro'>
        <form method="POST" id='formcadastro' action="/cadastro">
          <div className='cadastrar'>
            <label for="nome">Nome:</label>
            <div className='input_cadastro'>
            <input type="text" name="nome" id="nome" />
            </div>
          </div >
          <div className='cadastrar'>
            <label for="email">E-mail:</label>
            <div className='input_cadastro'>
            <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className='cadastrar'>
            <label for="senha">Senha:</label>
            <div className='input_cadastro'>
            <input type="password" name="senha" id="senha" />
            </div>
          </div>

          <div className='cadastrar'>
            <label for="telefone">Telefone:</label>
            <div className='input_cadastro'>
            <input type="text" name="telefone" id="telefone" />
            </div>
          </div>
          <div className='cadastrar'>
            <label for="vencimento">Vencimento :</label>
            <div className='input_cadastro'>
            <input type="numero" name="vencimento" id="vencimento" />
          
            </div>
          </div>
          <div className='cadastrar'>
            <label for="cpf">CPF:</label>
            <div className='input_cadastro'>
            <input type="text" name="cpf" id="cpf" />
            </div>
          </div>
          <button type="submit">Cadastrar</button>

        </form>
      </div>
    </>
  )
}

export default CadastroAdm;