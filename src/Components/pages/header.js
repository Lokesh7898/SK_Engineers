import React from 'react';
import ScrollEffect from '../utils/scrollEffect';

const Header = () => {
  return (
    <header className="header" id="home">
    <ScrollEffect />

      <div className="header-content">
        <div className="header-image">
          <div className="header-image-overlay"></div> 
        </div>
        <div className="header-overlay">
          <h1 className="header-heading">BUILD THE FUTURE</h1>
          <p className="header-paragraph">Implementing cutting-edge technologies in construction</p>
          <button className="header-btn">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
