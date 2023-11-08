import React from 'react'
import './FourthText.css'

const FourthText = () => {
  return (
    <div className='fourthTextMainContainer'>
        <div className='firstSection'>
          <h1>DICAS</h1>
            <div className='passagemAerea'>
              {/* <img src={passagemImg} alt="Aviao passando" /> */}
              <h2>PASSAGENS AÉRAS </h2>
              <p>Disponibilizamos para os convidados um canal de atendimento exclusivo para a semana do casamento na companhia gol, onde terão vouchers de 20% desconto em cima da tarifa do dia.</p>
              <h3 className='canalText'>Canal de atendimento Duda & Alex</h3>
              <p>Tel: 11 4135-9997 / 11 5811-1177<br/>Seg à sáb das 10 às 22h<br/>Dom 14h às 20h</p>
            </div>
        </div>
        {/* <div className='divisor'></div> */}
    </div>
  )
}

export default FourthText