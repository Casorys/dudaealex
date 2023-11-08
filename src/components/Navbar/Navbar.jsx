import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [navbar,setNavbar] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } 
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className={navbar ? 'navbarMainContainerActive' : 'navbarMainContainer'}>
        <a href="#top" className={navbar ? 'deaTextActive' : 'deaText'}>D&A</a>
        <div className='pagesContainer'>
          <a href="#programacao" className={navbar ? 'presentesLinkActive' : 'presentesLink'}>Programação</a>
          <a href="#dicas" className={navbar ? 'presentesLinkActive' : 'presentesLink'}>Dicas</a>
          <p className='buttonPresenca'><a href='#rsvp'>Confirmar Presença</a></p>
        </div>
    </div>
  )
}

export default Navbar