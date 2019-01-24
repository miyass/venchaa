import React, { Component } from 'react';
import TweenMax from 'gsap/TweenMax';
import '../../../Styles/App.css';

import AppHeader from '../AppHeader';
import AppMobileHeader from '../AppMobileHeader';
import SNSMenu from '../SNSMenu';

import portfolioConceptImage from '../../../Images/portfolioTop.png';
import portfolioMockImage from '../../../Images/portfolioMock.png';
import goaLIconImage from '../../../Images/GoaLicon.png';

import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;

class Portfolio extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
        <div className="portfolioApp">
          <Layout>
            <Row>
              <Col xs={0} sm={24} md={24} lg={24} xl={24}>
                <AppHeader />
                <SNSMenu />
              </Col>
              <Col xs={24} sm={0} md={0} lg={0} xl={0}>
                <AppMobileHeader />
              </Col>
            </Row>
            <Content style={{ backgroundColor: '#fcfcfc' }}>
              <div ref={div => this.topElement = div}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '100px' }}>
                <Col xs={16} sm={16} md={16} lg={16} xl={10}  style={{ textAlign: 'center'}}>
                <h1>Portfolio</h1>
                <p style={{ color: '#a1a1a1' }}>Web Design</p>
                <img alt="example" src={portfolioConceptImage} style={{ width: '100%', marginTop: '50px' }} /><br />
                </Col>
              </Row>
              </div>
              <div ref={div => this.conceptElement = div} style={{ opacity: '1', marginTop: '200px' }}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '50px' }}>
                <Col span={20} style={{ backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <h1>Concept</h1>
                </Col>
                <Col xs={20} sm={18} md={16} lg={16} xl={16} style={{ marginTop: '50px', backgroundColor: '#fcfcfc', textAlign: 'center'}}>
                  <img alt="example" src={portfolioMockImage} style={{ width: '100%' }} /><br />
                </Col>
                <Col xs={20} sm={18} md={12} lg={10} xl={10} style={{ marginTop: '50px', backgroundColor: '#fcfcfc', textAlign: 'left'}}>
                  <p className="productText">This is my portfolio site. When I started creating this web Site, I graduated University and started a new job. I thought I have to prove what I can do for my new job, I created my portfolio.</p>
                  <br />
                  <p className="productText">The main color is black and white. The reason why I only use black and white color is to emphasize the product and photograph color that I will post this web site.</p>
                </Col>
              </Row>
              </div>
              <div ref={div => this.developmentElement = div} style={{ opacity: '1', marginTop: '250px' }}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '5px' }}>
                <Col span={20} style={{ height: '100px', backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <h1>Development</h1>
                </Col>
                <Col xs={14} sm={12} md={10} lg={8} xl={6} style={{ height: '300px', backgroundColor: '#fcfcfc', textAlign: 'center'}}>
                  <img src={goaLIconImage} style={{ width: '200px', height: '200px' }} />
                </Col>
                <Col xs={14} sm={12} md={10} lg={8} xl={6} style={{ height: '300px', backgroundColor: '#fcfcfc', textAlign: 'left'}}>
                  <p>Programming Language : HTML / CSS / JavaScript</p>
                  <br />
                  <p>Development Period: 2 month</p>
                  <p>Development Persons: 1</p>
                  <br />
                  <p>Library: React, React Router, Ant Design</p>
                </Col>
              </Row>
              </div>
            </Content>
          </Layout>
        </div>
    );
  }
}

export default Portfolio;
