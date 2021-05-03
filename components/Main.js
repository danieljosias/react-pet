import React from 'react';
import './Main.scss';
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'
import card4 from '../img/card4.jpg'
import card5 from '../img/card5.jpg'
import card6 from '../img/card6.jpg'
import card7 from '../img/card7.jpg'
import card8 from '../img/card8.jpg'
import card9 from '../img/card9.jpg'
import card10 from '../img/card10.jpg'

export default function Main() {
 return (
   <main className="container-principal">

       <h1 className="card-title">Briquedos</h1>
       <div className="card-container">
        
            <div className="card">
            <img className="card-img" src={card1} alt=""/>
            <p className="card-text1">Bola Multicor</p>
            <p className="card-text2">R$ 27,99</p>
            </div>

            <div className="card">
            <img className="card-img" src={card2} alt=""/>
            <p className="card-text1">Bolinha LCM Cravinho</p>
            <p className="card-text2">R$ 6,99</p>
            
            </div>

            <div className="card">
            <img className="card-img" src={card3} alt=""/>
            <p className="card-text1">Brinquedo Chalesco Sapo</p>
            <p className="card-text2">R$ 36,99</p>
            </div>

            <div className="card">
            <img className="card-img" src={card4} alt=""/>
            <p className="card-text1">Corda Dental Bone</p>
            <p className="card-text2">R$ 21,99</p>
            </div>

            <div className="card">
            <img className="card-img" src={card5} alt=""/>
            <p className="card-text1">Brinquedo Macaco Petz</p>
            <p className="card-text2">R$ 39,99</p>
            </div>

       </div>

       <h1 className="card-title">Petiscos</h1>
       <div className="card-container">
        
            <div className="card">
            <img className="card-img" src={card6} alt=""/>
            <p className="card-text1">Biscoito Pedigree Biscrok</p>
            <p className="card-text2">R$ 13,99</p>
            </div>

            <div className="card">
            <img className="card-img" src={card7} alt=""/>
            <p className="card-text1">Biscoito Premier Cookie</p>
            <p className="card-text2">R$ 15,90</p>
            </div>

            <div className="card">
            <img className="card-img" src={card8} alt=""/>
            <p className="card-text1">Petisco Oh LàLà </p>
            <p className="card-text2">R$ 11,95</p>
            </div>

            <div className="card">
            <img className="card-img" src={card9} alt=""/>
            <p className="card-text1">Biscoito Menu Luopet</p>
            <p className="card-text2">R$ 10,00</p>
            </div>

            <div className="card">
            <img className="card-img" src={card10} alt=""/>
            <p className="card-text1">Biscoito Fórmula Natural </p>
            <p className="card-text2">R$ 7,90</p>
            </div>

       </div>

   </main>
 );
}