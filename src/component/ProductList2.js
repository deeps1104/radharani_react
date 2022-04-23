import React from 'react'
import './productlist.css'
import Product2 from '../assets/images/product2.png'

const ProductList2 = () => {
    const prod2 = [0,0]
  return (
    <div className='productlist2sec'>
        <ul>
            {
                prod2.map((item, index) => {
                    return <li><img src={Product2} alt='prod2 '/></li>
                })
            }
        </ul>
    </div>
  )
}

export default ProductList2