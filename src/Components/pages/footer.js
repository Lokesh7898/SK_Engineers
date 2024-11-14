import React from 'react';
import logo from '../assets/images/sk engineers logo.png';

const Footer = () => {
  return (
    <footer className="sk-footer">
      <div className="sk-footer-container">
        <div className="sk-footer-section sk-footer-contact-info">
          <h3>Contact Us</h3>
          <p>B-14 Collins Street West Victoria<br />2386 Lorem Colerfes State</p>
          <p>(+123) 456 789 - (+024) 666 888</p>
          <p>Contact@yourcompany.com</p>
        </div>

        <div className="sk-footer-section sk-footer-nav-links">
            <a className="sk-footer-brand" href="#">
              <img src={logo} alt="Logo" className="sk-footer-logo" />
            </a>
          
          <div className="sk-footer-links-container">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Projects</a>
            <a href="#">Blog</a>
            <a href="#">Team</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>

          <div className="sk-footer-social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-dribbble"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>

        <div className="sk-footer-section sk-footer-newsletter">
          <h3>Sign Up Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="sk-footer-bottom">
        <p>&copy; 2023 All Rights Reserved SK Engineer's</p>
      </div>
    </footer>
  );
};

export default Footer;
