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
          <a href="#presentes" className={navbar ? 'presentesLinkActive' : 'presentesLink'}>Presentes</a>
          <p className='buttonPresenca'><a href='#confirmationForm'>Confirmar Presença</a></p>
        </div>
    </div>
  )
}

export default Navbar