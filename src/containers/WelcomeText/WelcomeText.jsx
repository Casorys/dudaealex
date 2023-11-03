import React from 'react'
import './WelcomeText.css'
import { Timer } from '../../components'

const WelcomeText = () => {
  return (
    <div className='welcomeTextMainContainer'>
        <div className='firstSection'>
            <h2>Bem Vindos ao Nosso site!</h2>
            <p>Estamos muito felizes em poder compartilhar esse momento com vocês. Mais do que convidados, vocês fazem parte dessa história e não poderiam faltar neste capítulo.<br/>Para que possamos compartilhar nossa Ilha da Magia com cada um de vocês, sugerimos que nos presenteiem com sua presença!<br/>Criamos este site para compartilhar tudo sobre nosso casamento: horários, local, onde se hospedar, além de dicas turísticas.<br/>Duda e Alex</p>
        </div>
        <Timer />
        <div className='divisor'></div>
    </div>
  )
}

export default WelcomeText