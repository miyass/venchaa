import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PortfolioApp from '../Components/Portfolio/App';
import MapViewApp from '../Components/MapView/App';
import GoalApp from '../Components/Goal/Privacy';


class Origin extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PortfolioApp} />
          <Route exact path="/map" component={MapViewApp} />
          <Route exact path="/goal/privacy" component={GoalApp} />
        </div>
      </Router>
    );
  }
}

export default Origin;
