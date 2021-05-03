import React from 'react';
import './Acessorios.scss';

import card11 from '../img/card11.jpg'
import card12 from '../img/card12.jpg'
import card13 from '../img/card13.jpg'
import card14 from '../img/card14.jpg'
import card15 from '../img/card15.jpg'
import card16 from '../img/card16.jpg'
import card17 from '../img/card17.jpg'
import card18 from '../img/card18.jpg'
import card19 from '../img/card19.jpg'
import card20 from '../img/card20.jpg'

export default function Acessorios() {
 return (
   <section className="section-principal">
     

    <h1 className="section-title">Acessórios</h1>
    <div className="section-container">
 
        <div className="card">
        <img className="card-img" src={card11} alt=""/>
        <p className="card-text1">Comedouro Vermelho</p>
        <p className="card-text2">R$ 29,99</p>
        </div>

        <div className="card">
        <img className="card-img" src={card12} alt=""/>
        <p className="card-text1">Comedouro Azul</p>
        <p className="card-text2">R$ 29,99</p>
        
        </div>

        <div className="card">
        <img className="card-img" src={card13} alt=""/>
        <p className="card-text1">Comedouro Verde</p>
        <p className="card-text2">R$ 29,99</p>
        </div>

        <div className="card">
        <img className="card-img" src={card14} alt=""/>
        <p className="card-text1">Bebedouro Rosa</p>
        <p className="card-text2">R$ 17,99</p>
        </div>

        <div className="card">
        <img className="card-img" src={card15} alt=""/>
        <p className="card-text1">Bebedouro Azul</p>
        <p className="card-text2">R$ 17,99</p>
        </div>

    </div>

        <div className="card-container">
    
        <div className="card">
        <img className="card-img" src={card16} alt=""/>
        <p className="card-text1">Comedouro Duplo Rosa</p>
        <p className="card-text2">R$ 24,99</p>
        </div>

        <div className="card">
        <img className="card-img" src={card17} alt=""/>
        <p className="card-text1">Comedouro Duplo Vermelho</p>
        <p className="card-text2">R$ 24,99</p>
        </div>

        <div className="card">
        <img className="card-img" src={card18} alt=""/>
        <p className="card-text1">Comedouro Duplo Azul </p>
        <p className="card-text2">R$ 24,00</p>
        </div>

        <div className="card">
        <img className="card-img" src={card19} alt=""/>
        <p className="card-text1">Comedouro Amarelo</p>
        <p className="card-text2">R$ 7,99</p>
        </div>

        <div className="card">
        <img className="card-img" src={card20} alt=""/>
        <p className="card-text1">Comedouro Vermelho </p>
        <p className="card-text2">R$ 7,99</p>
        </div>

    </div>

   </section>
 );
}