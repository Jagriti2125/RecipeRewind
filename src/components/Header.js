import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>RECIPEREWIND</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog Feed</a></li>
          <li><a href="/contact" className="contact-button">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;