import React from 'react'
import './footer.css'
import RLogoW from '../assets/images/radharani_logo_white.png'

const Footer = () => {
  return (
    <div className='footersec'>
        <div className='logo'>
            <img src={RLogoW} alt='radhawhite' />
        </div>
        <ul>
            <li><a href='#'>Quick Links</a></li>
            <li><a href='#'>About Us</a></li>
        </ul>
    </div>
  )
}

export default Footer