import React, { Component } from 'react';
// import '../Styles/App.css';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import PortfolioProfile from './Portfolio/Contents/PortfolioProfile';
import PortfolioProduct from './Portfolio/Contents/PortfolioProduct';
import ProductGoal from './Portfolio/Products/Goal';
import ProductAutocompleteKintone from './Portfolio/Products/AutocompleteKintone';
import ProductPortfolio from './Portfolio/Products/Portfolio';
import PortfolioPhotograph from './Portfolio/Contents/PortfolioPhotograph';
import GoalApp from './Goal/App';
import VentakuApp from './Ventaku/App';

const browserHistory = createBrowserHistory();

browserHistory.listen((location, action) => {
  window.scrollTo(0, 0);
});

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="app">
          <Route exact path="/" component={PortfolioProfile} />
          <Route exact path="/product" component={PortfolioProduct} />
          <Route exact path="/product/goal" component={ProductGoal} />
          <Route exact path="/product/autocompletekintone" component={ProductAutocompleteKintone} />
          <Route exact path="/product/portfolio" component={ProductPortfolio} />
          <Route exact path="/photograph" component={PortfolioPhotograph} />
          <Route exact path="/goal" component={GoalApp} />
          <Route exact path="/ventaku" component={VentakuApp} />
        </div>
      </Router>
    );
  }
}

export default App;
