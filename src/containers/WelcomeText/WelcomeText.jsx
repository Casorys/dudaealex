import React from 'react'
import './WelcomeText.css'
import { Timer } from '../../components'

const WelcomeText = () => {
  return (
    <div className='welcomeTextMainContainer'>
        <div className='firstSection'>
            <h2>BEM VINDOS AO NOSSO SITE</h2>
            <p>ESTAMOS MUITO FELIZES EM PODER COMPARTILHAR ESSE MOMENTO COM VOCÊS, MAIS DO QUE CONVIDADOS VOCÊS FAZEM PARTE DESSA HISTÓRIA E NÃO PODERIAM FALTAR NESTE CAPÍTULO.<br/><br/>PARA QUE POSSAMOS COMPARTILHAR NOSSA ILHA DA MAGIA COM CADA UM DE VOCÊS, SUGERIMOS QUE NOS PRESENTEIEM COM SUA PRESENÇA!<br/><br/>CRIAMOS ESTE SITE PARA COMPARTILHAR TUDO SOBRE NOSSO CASAMENTO: HORÁRIOS, LOCAL, ONDE SE HOSPEDAR, ALÉM DE DICAS TURÍSTICAS.<br/><br/><br/>DUDA E ALEX</p>
        </div>
        <div  id='programacao'></div>
        <Timer />
        <div className='divisor'></div>
    </div>
  )
}

export default WelcomeText