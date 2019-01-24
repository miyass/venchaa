import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Layout, Menu, Button, Icon, Drawer, Row, Col } from 'antd';
const { Header } = Layout;

class AppMobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Header style={{ backgroundColor: 'rgba(0,0,0,0)', position: 'fixed', zIndex: '100', right: '0%', top: '3%' }}>
        <Icon type="bars" onClick={this.showDrawer} style={{ cursor: 'pointer', fontSize: '25px' }} />
        <Drawer title="" closable={false} onClose={this.onClose} visible={this.state.visible}>
          <Menu mode="vertical" style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0)', textAlign: 'center' }}>
            <Menu.Item key="Menu" style={{ marginTop: '0px' }}>
              Menu
            </Menu.Item>
            <Menu.Item key="profile" style={{ marginTop: '50px' }}>
              <NavLink to="/">
                Profile
              </NavLink>
            </Menu.Item>
            <Menu.Item key="product" style={{}}>
              <NavLink to="/product">
                Product
              </NavLink>
            </Menu.Item>
            <Menu.Item key="photograph" style={{}}>
              <NavLink to="/photograph">
                Photograph
              </NavLink>
            </Menu.Item>
            <Menu.Item key="github" style={{ marginTop: '100px' }}>
              <a href="https://github.com/miyass" target="_blank">
                <Icon type="github" style={{ fontSize: '25px', color: '#333' }} />
              </a>
            </Menu.Item>
            <Menu.Item key="facebook" style={{ marginTop: '25px' }}>
              <a href="https://www.facebook.com/Vencha.Miyakura" target="_blank">
                <Icon type="facebook" style={{ fontSize: '25px', color: '#3b5998' }} />
              </a>
            </Menu.Item>
            <Menu.Item key="instagram" style={{ marginTop: '25px' }}>
              <a href="https://www.instagram.com/venchaaa/" target="_blank">
                <Icon type="instagram" style={{ fontSize: '25px', color: '#262626' }} />
              </a>
            </Menu.Item>
            <Menu.Item key="note" style={{ marginTop: '25px' }}>
              <a href="https://note.mu/venchaa" target="_blank">
                <Icon type="file" style={{ fontSize: '25px', color: '#2dcdb5', transform: 'scale(-1, 1)' }} />
              </a>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    );
  }
}

export default AppMobileHeader;
