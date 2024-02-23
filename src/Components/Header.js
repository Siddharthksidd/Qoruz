import React, { useState } from 'react'
import "../Component-CSS/Header.css"
import Mobilemenu from './Mobilemenu';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };




  return (
    <>
    <header>
        <div className='container'>
            <div className="navbar">
                <div className='navmenu'>
                <img className='qoruzlogo' src="/images/logo/Logo.webp" alt="Qoruz logo" />
                  <span>
                    <h3>Solutions</h3>
                    <img className='navdrop' src="/images/icons/chevron-down.webp" alt="dropdown"/>
                  </span>
                  <span>
                    <h3>Resources</h3>
                    <img className='navdrop' src="/images/icons/chevron-down.webp" alt="dropdown"/>
                  </span>
                  <span>
                    <h3>Features</h3>
                    <img className='navdrop' src="/images/icons/chevron-down.webp" alt="dropdown"/>
                  </span>
                  <span>
                    <h3>Pricing</h3>
                  </span>
                  
                  </div>
                  <div className='navlogin'>
                    <button>
                      Log in
                      <img src='/images/icons/Website Icons black.webp' alt='link'/>
                    </button>
                    <button>
                      Get started free
                      <img src='/images/icons/Frame 1379.webp' alt='link'/>
                    </button>
                  </div>
                <img className='menu' src="/images/icons/menu.webp" alt="menu" onClick={handleMenu}/>
            </div>
        </div>
    </header>

    {
    isMenuOpen && (
      <Mobilemenu />
    )
    }
    </>
  )
}

export default Header