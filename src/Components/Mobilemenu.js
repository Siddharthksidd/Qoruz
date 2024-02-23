import React from 'react'
import "../Component-CSS/Mobilemenu.css"


const Mobilemenu = () => {
  return (
    <>
    <div className='mobilemenu'>
        <div className="menuItems">
          <h2>Product</h2>
          <img src='/images/icons/Website Icons brown.webp' alt='link'/>
        </div>
        <div className="menuItems">
          <h2>Resources</h2>
          <img src='/images/icons/Website Icons brown.webp' alt='link'/>
        </div>
        <div className="menuItems">
          <h2>Pricing</h2>
        </div>
      </div>
    <div className='buttombtn'>
    <button className='mobmenubtn'>Get started free<img src='/images/icons/Frame 1379.webp' alt='link'/></button>
    </div>
    </>
  )
}

export default Mobilemenu