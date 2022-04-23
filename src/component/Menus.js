import React from 'react'
import './menu.css'

const Menus = () => {

const Menu = ['NEW ARRIVALS', 'KURTIS', 'SAREES', 'SUITS', 'LEHENGAS', 'GOWNS', 'WESTERNS']

  return (
    <div className='menusec'>
        <ul>
            {
                Menu.map((item, index) => {
                    return <li key={index}><a href='#'>{item}</a></li>
                })
            }
        </ul>
    </div>
  )
}

export default Menus