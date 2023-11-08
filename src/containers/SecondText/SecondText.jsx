import React from 'react'
import './SecondText.css'

import welcomeDrinksImg from '../../assets/welcomeDrinksImg.jpeg'

const SecondText = () => {
  return (
    <div className='secondTextMainContainer'>
        <div className='firstSection'>
            <h1 className='progH1'>PROGRAMAÇÃO</h1>
            <div>
              <img src={welcomeDrinksImg} alt="Varios Drinks em Preto e Branco" className='welcomeDrinksImg'/>
              <p className='welcomeDrinksTitle'>Welcome Drinks</p>
              <h3>14.06.2024</h3>
            </div>
            <p>
            Para entrar em clima de praia, estaremos recepcionando os convidados na praia.
            </p>
            <h3>local: clericot café, curva da jurema.<br/>a partir das 17:00 horas.</h3>
            <p>Drinks serão por conta dos noivos!<br/>Recomendamos rasteirinhas, havaianas ou tênis, malhas são bem vindas para melhorar o conforto com o cair da noite.</p>
        </div>
        <div className='divisor'></div>
    </div>
  )
}

export default SecondText