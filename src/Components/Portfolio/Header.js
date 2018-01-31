import React, { Component } from 'react';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Portfolio/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="headerMenu">
            <li className="headerList headerProfile">
              <a href="#profile" className="innerLink">About me</a>
            </li>
            <li className="headerList headerCareer">
              <a href="#career" className="innerLink">Career</a>
            </li>
            <li className="headerList headerPortfolio">
              <a href="#portfolio" className="innerLink">Portfolio</a>
            </li>
            <li className="headerList headerContact">
              <a href="#contact" className="innerLink">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
 }

 export default Header;
