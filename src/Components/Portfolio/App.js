import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainContent from './Main';

import '../../Styles/Portfolio/Style.css';


class App extends Component {
  render() {
    return(
        <MuiThemeProvider>
          <MainContent />
        </MuiThemeProvider>
    );
  }
}

export default App;
