import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
 return (
   <footer className="rodape">
      <p className="text">React Pet © 2021</p>
       <Link to="/privacidade"><p className="link">Política de Privacidade</p></Link>
   </footer>
 );
}