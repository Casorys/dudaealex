import React from 'react'
import './Presentes.css'
import { TypeformPresentes } from '../../components'

const Presentes = () => {
  return (
    <div className='presentesMainContainer'>
        <h1>PRESENTES</h1>
        <p>PARA NÓS SUAS PALAVRAS DE CARINHO SÃO UM PRESENTE.<br/>OBRIGADO POR NOS DAR O SEU CARINHO. IREMOS LEMBRAR PARA SEMPRE DESTE MOMENTO TÃO ESPERADO.</p>
        <div className='formMainContainer' id='presentes'>
          {/* <TypeformPresentes /> */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScifKfGbfQ8ARn576u7fZh_snV884sWmb1PZ34Tc2MxWfyDWg/viewform?embedded=true" width="400" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        <div className='divisor'></div>
    </div>
  )
}

export default Presentes