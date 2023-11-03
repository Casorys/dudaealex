import React from 'react'
import './RSVP.css'

import { Typeform } from '../../components';


const RSVP = () => {


  return (
    <div className='RSVPMainContainer'>
      <h1>RSVP Duda & Alex</h1>
      <div className='formMainContainer'>
      {/* <Typeform /> */}
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSes904vdSK1pojsu8I1Q7-BZOgiqA_oiCwAsLgkp4Ic7oGemw/viewform?embedded=true" width="400" height="1050px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      <div className='divisor'></div>
    </div>
  )
}

export default RSVP