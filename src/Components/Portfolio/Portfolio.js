import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
// import Dialog from 'material-ui/Dialog';

import PhotoLoad from './PhotoLoad';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Portfolio/Main.css';
import '../../Styles/Portfolio/Portfolio.css';


class Portfolio extends Component {
  constructor () {
    super()
    this.state = {
      imgsrc: '../../Images/Portfolio/image7.jpg'
    }
  }

  render() {

    return (
      <section className="portfolio" id="portfolio">
        <Paper zDepth={5} className="portfolioContent">
          <h1 className="portfolioTitle">Portfolio</h1>
          <h2 className="profilePhoto">Photograph</h2>
            <PhotoLoad />
        </Paper>
      </section>
    );
  }
}

export default Portfolio;
