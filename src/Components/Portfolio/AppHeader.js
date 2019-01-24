import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import '../Styles/App.css';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: 'rgba(0,0,0,0)', position: 'fixed', zIndex: '100', right: '0%' }}>
        <Menu mode="horizontal" style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0)', lineHeight: '100px', textAlign: 'right', marginRight: '50px' }}>
          <Menu.Item key="profile" style={{border: 'none'}}>
            <NavLink to="/">
              Profile
            </NavLink>
          </Menu.Item>
          <Menu.Item key="product" style={{border: 'none'}}>
            <NavLink to="/product">
              Product
            </NavLink>
          </Menu.Item>
          <Menu.Item key="photograph" style={{border: 'none'}}>
            <NavLink to="/photograph">
              Photograph
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default AppHeader;
