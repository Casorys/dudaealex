import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'

const Navbar = () => {

  const [navbar,setNavbar] = useState(false)
  const [menuColor, setMenuColor] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => (
    <>
    <a href="#programacao" className={navbar ? 'presentesLinkActive' : 'presentesLink'}>Programação</a>
          <a href="#dicas" className={navbar ? 'presentesLinkActive' : 'presentesLink'}>Dicas</a>
          <p className='buttonPresenca'><a href='#rsvp'>Confirmar Presença</a></p>
    </>
  )

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
      setMenuColor(true)
    } 
    else {
      setNavbar(false)
      setMenuColor(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor)

  return (
    <div className={navbar ? 'navbarMainContainerActive' : 'navbarMainContainer'}>
        <a href="#top" className={navbar ? 'deaTextActive' : 'deaText'}>D&A</a>
        <div className='pagesContainer'>
          <Menu/>
        </div>
        <div className='navbarMenu'>
          {toggleMenu ? <RiCloseLine className={menuColor ? 'menuColorActive' : 'menuColor'} onClick={() => setToggleMenu(false)}/> : <RiMenu3Line className={menuColor ? 'menuColorActive' : 'menuColor'} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className='navbarMenuContainer'>
              <div className='navbarMenuContainerLinks'>
                <Menu/>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar