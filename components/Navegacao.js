import React from 'react';
import './Navegacao.scss';
import {Link} from 'react-router-dom'
import logo from '../img/simbolo-pet.png'

export default function Navegacao() {
 return (
    <nav className="navbar">
      
      <img className="img" src={logo} alt="logo"/>

      <div className="container-links">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/acessorios">Acessórios</Link>
        <Link className="links" to="/trabalheconosco">Trabalhe Conosco</Link>
      </div>

    </nav>
 );
}