import React, { useState } from 'react';
import "../styles/global.scss";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleChangeEmail(event){
        setEmail(event.target.value);
    }

    function handleChangePassword(event){
        setPassword(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        navigate('home');
    }

  return(
    
        <div id='form'>

            <form onSubmit={handleSubmit}>
            <img id='logo' src={logo} alt="logo evoluir" />

                <h1>Fazer Login</h1>
                <div className="boxField">
                
                <label htmlFor="email">Email:</label>
                <input id='email' className='inputsLogin' placeholder='Seu email cadastrado aqui'  type="email" onChange={handleChangeEmail}/>
    
                </div>

                <div className="boxField">
                <label htmlFor="password">Senha:</label>
                <input id='password' className='inputsLogin' placeholder='Sua senha aqui'  type="password" onChange={handleChangePassword} />
                </div>

                <input id='submitInput' type="submit" value="Login"/>
            </form>
        </div>
  )
}

export default Login;