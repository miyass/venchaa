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
              <a href="#profile" className="innerLargeLink">
                About me
              </a>
              <a href="#profile" className="innerSmallLink">
                <i className="fa fa-2x fa-user"></i>
              </a>
            </li>
            <li className="headerList headerCareer">
              <a href="#career" className="innerLargeLink">
                Career
              </a>
              <a href="#career" className="innerSmallLink">
                <i className="fa fa-2x fa-briefcase"></i>
              </a>
            </li>
            <li className="headerList headerPortfolio">
              <a href="#portfolio" className="innerLargeLink">
                Portfolio
              </a>
              <a href="#portfolio" className="innerSmallLink">
                <i className="fa fa-2x fa-camera"></i>
              </a>
            </li>
            <li className="headerList headerContact">
              <a href="#contact" className="innerLargeLink">
                Contact
              </a>
              <a href="#contact" className="innerSmallLink">
                <i className="fa fa-2x fa-comments"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
 }

 export default Header;
