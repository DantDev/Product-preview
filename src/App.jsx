import React from 'react'
import prodImgDesktop from "./assets/image-product-desktop.jpg"
import prodImgMobile from "./assets/image-product-mobile.jpg"
import cartIcon from "./assets/icon-cart.svg"
function App() {

return (
  <div className='container'>
      <img className='image card--img' src={prodImgDesktop} />
      <img className='image card--img-2' src={prodImgMobile} />
      <div className='card--info'>
        <p className='card--intro'>PERFUME</p>
        <h1 className='card--title'>Gabrielle Essence Eau De Parfum</h1>
        <p className='card--text'>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.</p>
        <div className='value'>
          <h2 className='card--value'>$149.99</h2>
          <p className='card--oldvalue'>$169.99</p>
        </div>
        <button className='btn'><img className='btn-icon' src={cartIcon} /> Add to Cart</button>
      </div>
    </div>
  )
}

export default App
