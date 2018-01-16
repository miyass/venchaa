import React, { Component } from 'react';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Portfolio/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="headerMenu">
            <li className="headerList headerProfile">About me</li>
            <li className="headerList headerCareer">Career</li>
            <li className="headerList headerPortfolio">Portfolio</li>
            <li className="headerList headerContact">Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
 }

 export default Header;
