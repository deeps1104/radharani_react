import React from 'react'
import './productlist.css'
import Product1 from '../assets/images/product1.png'

const ProductList1 = () => {
  const prod1 = [0,0,0,0]
  return (
    <div className='productlist1sec'>
      <ul>
        {
          prod1.map((item, index) => {
            return <li><img src={Product1} alt='prod1'/></li>
          })
        }
      </ul>
    </div>
  )
}

export default ProductList1