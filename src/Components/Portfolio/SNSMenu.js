import React, { Component } from 'react';
import { Icon, Menu } from 'antd';

export default class SNSMenu extends Component {
  render() {
    return (
      <Menu mode="vertical" style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0)', overflow: 'auto', position: 'fixed', bottom: 75, right: 75, zIndex: '100' }}>
        <Menu.Item key="github">
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
    );
  }
}
