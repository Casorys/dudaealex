import React from 'react'
import './ThirdText.css'

import casamentoImg from '../../assets/casamentoImg.jpg'
import espelhoDAguaImg from '../../assets/espelhoDAgua.jpg'
import googleIcon from '../../assets/googleCalendarIcon.svg'
import appleIcon from '../../assets/appleCalendarIcon.png'

const ThirdText = () => {
  return (
    <div className='thirdTextMainContainer'>
        <div className='firstSection'>
            <div>
              <img src={casamentoImg} alt="Carro de Casamento" className='casamentoImg'/>
              <h2 className='casamentoTitle'>CASAMENTO</h2>
              <h4>15.06.2024<br/>ÀS 15H30</h4>
            </div>
              <h5>ESPAÇO ESPELHO D'ÁGUA</h5>
              <h5>Av. Mal. Mascarenhas de Moraes, 2100 - Bento Ferreira, Vitória - ES, 29050-625<br/>APÓS A CERIMONIA, OS NOIVOS RECEBERÃO OS CUMPRIMENTOS NO MESMO LOCAL.</h5>
              <img src={espelhoDAguaImg} alt="Paisagem do Espelho D'Água" className='espelhoDAguaImg'/>
            <p className='descParagraph'>
            OS NOIVOS DISPONIBILIZARÃO TRANSFER ATÉ O CASAMENTO, QUE SERÁ AGENDADO PELA ACESSORIA COM OS CONVIDADOS. NÃO ESQUEÇA DE INFORMAR O LOCAL DE HOSPEDAGEM.
            </p>
            <h5 id='confirmationForm'>TRAJE: ESPORTE FINO</h5>
            <p>Dispensamos a gravata. Blazer não é obrigatório. Saltos confortáveis serão bem vindos acompanhados de vestidos fluidos.</p>
        </div>
        <div className='thirdSection'>
          <h3>Salve a programação do casamento no seu calendário!</h3>
          <a target='_blank' href="https://calendar.google.com/calendar/u/1?cid=NzhkZjRkZjU2NzM3MjQ3MjZjZTA4ZDcwYzdiZjdiMWMwNWZiZjI1NjJjOTQ3YjVlYWM3MzJjMzZmMDQ0ZDdlM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
            <img src={googleIcon} alt="Google Calendar" className='calendarIcon'/>
          </a>
          <a target='_blank' href="webcal://p129-caldav.icloud.com/published/2/MTUwODExNTI0MjE1MDgxMY8WGqSJH7bGuPTf0e3H0GIfUzZzjgmCj8OYHaglPgdCE-QUG-yD3rLwsNuXPmOGP_Q8c3-dVrRUHL-lauj2GoQ">
            <img src={appleIcon} alt="Apple Calendar" className='calendarIcon'/>
          </a>
        </div>
        <div className='divisor'></div>
    </div>
  )
}

export default ThirdText