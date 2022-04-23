import React from 'react'
import './header.css'
import {FaSistrix,FaUser, FaShoppingCart} from 'react-icons/fa'
import RLogo from '../assets/images/radharani_logo.png'

const Header = () => {
  return (
    <div className='headersec'>
        <div className='search'>
            <a href='#'><FaSistrix/></a>
        </div>
        <div className='logo'>
            <img src={RLogo} alt='radhalogo' />
        </div>
        <div className='usercart'>
            <ul>
                <li><a href='#'><FaUser/></a></li>
                <li><a href='#'><FaShoppingCart/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header