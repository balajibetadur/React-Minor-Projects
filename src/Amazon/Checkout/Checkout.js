import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <h2 className="checkout__title">
                Your Shopping Cart
            </h2>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout