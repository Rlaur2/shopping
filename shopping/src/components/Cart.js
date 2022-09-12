import React from 'react'
import './stylesheets/Cart.css'
import { CartItem } from './CartItem'
import {ReactComponent as WindowClose} from '/home/pavel/Projects/Shopping/shopping/src/images/window-close.svg'


export const Cart = ({cart, change, setChange, setDisplay, totalQuantity}) => {


  const handleCartDisplay = () => {
    setDisplay('no-display');
  }

  return (
        <>
        <div onClick={(e) => {e.stopPropagation(); handleCartDisplay()}} className='transparent-background'></div>
            <div className="cart">
                <div className='close-button' onClick={handleCartDisplay}><WindowClose /></div>
                <div className='cart-name'>Shopping Cart</div>
                    <div>
                      {cart && cart.length ? <div>{cart.map((item, index) => (
                        <CartItem 
                          key={index} 
                          cartItem={item}
                          setChange={setChange}
                          change={change} 
                          />
                    ))}</div> : <div className='empty-cart-message'>Your cart is empty...</div>}
                    </div>
                    {cart.length ? 
                    <div className="checkout">
                        Proceed To Checkout ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})
                    </div> : null}
            </div>
        </>
  )
}