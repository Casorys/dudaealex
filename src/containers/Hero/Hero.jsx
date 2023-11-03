import React from 'react'
import './Hero.css'
import { Navbar } from '../../components'

const Hero = () => {
  return (
    <div className='heroMainContainer'>
      <Navbar />
      <div className='heroNameDate'>
        <h1>15/06/2024</h1>
        <h3>Duda & Alex</h3>
      </div>
    </div>
  )
}

export default Hero