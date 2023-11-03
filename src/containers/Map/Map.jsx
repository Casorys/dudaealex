import React from 'react'
import './Map.css'
import { useEffect } from 'react'

const Map = () => {

  // var = mapWidth = 

  return (
    <div className='locationMainContainer'>
      <div className='mapMainContainer'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.554323511589!2d-40.3105377!3d-20.318706499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d803bf4ba71%3A0xc21b1e439b000e!2sAv.%20Mal.%20Mascarenhas%20de%20Moraes%2C%202100%20-%20Bento%20Ferreira%2C%20Vit%C3%B3ria%20-%20ES%2C%2029050-626!5e0!3m2!1sen!2sbr!4v1698858872111!5m2!1sen!2sbr" width="55%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='divisor'></div>
    </div>
  )
}

export default Map