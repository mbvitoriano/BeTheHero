import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';


export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions' , {id});
      console.log(response.data.name);

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    }catch(err) {
      alert('Falha no login, tente novamente!');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero Logo"/>
        <form onSubmit = {handleLogin}>
          <h1>Faça Seu Login</h1>

          <input 
            placeholder = 'Sua Id'
            value = {id}
            onChange = {e => setId(e.target.value)}
          />
          <button className = "button" type="submit">Entrar</button>
          
          
          <Link className = 'back-link'to="/register"><FiLogIn size = {16} color="#E02041 "/>Não Tenho Cadastro</Link>
        </form>
      </section>
      <img src={heroesImg} alt='Heroes'/>
    </div>
  );
}