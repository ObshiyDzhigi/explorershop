import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer container'>
      <div className='top'>
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Linkss</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum molestias repudiandae commodi! Beatae quam dolores rerum consequuntur quae laboriosam nostrum a quibusdam obcaecati quisquam, minus quasi asperiores ad quod! Alias!
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum molestias repudiandae commodi! Beatae quam dolores rerum consequuntur quae laboriosam nostrum a quibusdam obcaecati quisquam, minus quasi asperiores ad quod! Alias!
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className="left">
          <span className="logo">Zhigastore</span>
          <span className="copyright">Copyright © 1996–2024.Все права защищены.
</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
