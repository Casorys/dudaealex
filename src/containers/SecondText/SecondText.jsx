import React from 'react'
import './SecondText.css'

import welcomeDrinksImg from '../../assets/welcomeDrinksImg.jpeg'

const SecondText = () => {
  return (
    <div className='secondTextMainContainer'>
        <div className='firstSection'>
            <h1>PROGRAMAÇÃO</h1>
            <div>
              <img src={welcomeDrinksImg} alt="Varios Drinks em Preto e Branco" className='welcomeDrinksImg'/>
              <h2>WELCOME DRINKS</h2>
              <h4>14.06.2024</h4>
            </div>
            <p>
            Para entrar em clima de praia, estaremos recepcionando os convidados no _________, na praia, a partir das 17hs na sexta-feira.<br/>Serão disponibilizadas vans do aeroporto até o welcome.<br/>Drinks serão por conta dos noivos!<br/>Venha confortável. Recomendamos rasteirinhas, havaianas ou tênis.<br/>Esperamos você lá!
            </p>
        </div>
        <div className='divisor'></div>
    </div>
  )
}

export default SecondText