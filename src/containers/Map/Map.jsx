import React from 'react'
import './Map.css'
import { useEffect } from 'react'

const Map = () => {

  // var = mapWidth = 

  return (
    <div className='locationMainContainer'>
        <h1>MAPA</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.554323511589!2d-40.3105377!3d-20.318706499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d803bf4ba71%3A0xc21b1e439b000e!2sAv.%20Mal.%20Mascarenhas%20de%20Moraes%2C%202100%20-%20Bento%20Ferreira%2C%20Vit%C3%B3ria%20-%20ES%2C%2029050-626!5e0!3m2!1sen!2sbr!4v1698858872111!5m2!1sen!2sbr" width="55%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>Sugerimos o uso de Uber para locomoção em Vitória.</p>
      <div className='mapMainContainer'>
      </div>
      <div className='hospedagemSection'>
        {/* <img src={hospedagemImg} alt="Hotelzinho" /> */}
        <h2>HOSPEDAGEM</h2>
        <div className='hotelContainer'>
          <a href="https://www.marriott.com/en-us/hotels/vixsi-sheraton-vitoria-hotel/overview/"><h3>Hotel Sheraton Vitória</h3></a>
          <div className='cupomContainer'>
            <h4 className='cupomH5'>Cupom 20%</h4>
            <p className='cupomH4'>Duda&Alex</p>
          </div>
        </div>
        <div className='hotelContainer'>
          <a href="https://www.reserveatlantica.com.br/hotel/comfort-suites-vitoria?utm_source=gmb&utm_medium=organic&utm_campaign=google-my-business"><h3>Comfort Inn Praia do Canto</h3></a>
          <div className='cupomContainer'>
            <h4 className='cupomH5'>Cupom 20%</h4>
            <p className='cupomH4'>Duda&Alex</p>
          </div>
        </div>
        <div className='hotelContainer'>
          <a href="https://all.accor.com/hotel/5223/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps"><h3>Hotel Ibis Praia do Canto</h3></a>
        </div>
        <div className='hotelContainer'>
          <a href="https://www.hotelilhadoboi.com.br"><h3>Hotel Senac Ilha do Boi</h3></a>
        </div>
        <div className='hotelContainer'>
          <a href="https://all.accor.com/hotel/7437/index.pt-br.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps"><h3>Hotel Ibis Praia de Camburi</h3></a>
        </div>
      </div>
      <div className='belezaSection'>
        {/* <img src={belezaImg} alt="Hotelzinho" /> */}
        <h2>SALÃO DE BELEZA</h2>
        <div className='belezaContainer'>

        </div>
      </div>
      <div className='restaurantesSection'>
        {/* <img src={restaurantesImg} alt="Hotelzinho" /> */}
        <h2>RESTAURANTES</h2>
        <div  id='rsvp'></div>
        <div className='restaurantesContainer'>
          <a href="https://maps.app.goo.gl/hZ2aB6xmv227uWzh8"><h3>Canto do Vinho</h3></a>
          <a href="https://maps.app.goo.gl/JiDTdSHfURPFDnpt8"><h3>Clube Saldanha</h3></a>
        </div>
      </div>
      <div className='divisor'></div>
    </div>
  )
}

export default Map