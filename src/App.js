import React from 'react'
import { Hero, WelcomeText, SecondText, ThirdText, FourthText, RSVP, Map, Presentes } from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='overlayPaper'></div>
        <Hero />
        <WelcomeText />
        <SecondText />
        <ThirdText />
        <FourthText />
        <Map />
        <RSVP />
    </div>
  )
}

export default App