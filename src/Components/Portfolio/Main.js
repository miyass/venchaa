import React, { Component } from 'react';

import Header from './Header';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Career from './Career';
import Contact from './Contact';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Portfolio/Main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        <div className="firstLine">
        <div className="middleLine">
        <div className="endLine">
          <div className="topPage">
            <h1 className="title">Sohei Miyakura</h1>
            <h2 className="subTitle">I'm Web Developer / Designer</h2>
          </div>
          <Profile />
          <Career />
          <Portfolio />
          <Contact />
        </div>
        </div>
        </div>
      </main>
    );
  }
}

export default Main;
