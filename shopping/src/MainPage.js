import React from 'react'
import chevron from './images/chevron-right.svg'

export const MainPage = () => {
  return (
    <div className='background'>
      <div className='intro'>
        <div className='store-title'>Online Retailer</div>
        <div className="blurb">Apparel, jewlery, and the latest electronics</div>
        <div className="shop-button">Shop Now <img className='shop-button-arrow' alt='directional-indicator' src={chevron}></img></div>
      </div>
    </div>
  )
}