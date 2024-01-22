import React from 'react';
import './Navbar.css';
import { useState } from 'react';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='desktop-nav'>
    <nav>
      <div className="logo">
        <div className="name">S2S Language converter</div>
        <ul className="nav-links">
          <li><a href='https://ai.meta.com/blog/seamless-m4t/'>Seamless-M4</a></li>
          <li><a href='https://github.com/facebookresearch/seamless_communication'>Git-Link</a></li>
          <li><a href='https://huggingface.co/spaces/facebook/seamless-m4t-v2-large'>HuggingFace</a></li>
        </ul>
      </div>
      <nav className='hamburger-nav'>
        <div className='hamburger-menu'>
            <div className='hamburger-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                <div className={`menu-links ${menuOpen ? 'false' : ''}`}>
                    <li><a href='https://ai.meta.com/blog/seamless-m4t/'>Seamless-M4</a></li>
                    <li><a href='https://github.com/facebookresearch/seamless_communication'>Git-Link</a></li>
                    <li><a href='https://huggingface.co/spaces/facebook/seamless-m4t-v2-large'>HuggingFace</a></li>
                </div>
            </div>
        </div>
      </nav>
    </nav>
    </nav>
  );
};