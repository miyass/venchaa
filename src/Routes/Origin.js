import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PortfolioApp from '../Components/Portfolio/App';


class Origin extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={PortfolioApp} />
      </Router>
    );
  }
}

export default Origin;
