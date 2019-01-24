import React, { Component } from 'react';
import TweenMax from 'gsap/TweenMax';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import '../../../Styles/App.css';

import AppHeader from '../AppHeader';
import AppMobileHeader from '../AppMobileHeader';
import SNSMenu from '../SNSMenu';

import goalImage from '../../../Images/goalTop.png';
import autocompleteKintoneImage from '../../../Images/autocompletekintoneIcon.png';
import portfolioImage from '../../../Images/portfolioTop.png';
import progressBar from '../../../Images/progressbarTop.gif';

import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;
const { Meta } = Card;

class PortfolioProduct extends Component {
  constructor(props){
    super(props);
    this.goalElement = null;

    this.goalPosition = 0;

    this.flug = false;
    this.goalAnimated = false;
  }

  componentDidMount() {
    this.goalPosition = this.goalElement.getBoundingClientRect().top + window.pageYOffset - this.goalElement.getBoundingClientRect().height / 2;
    TweenMax.to(this.goalElement, 1.5, {opacity: 1, y: -100});
    // window.addEventListener('scroll', (event) => this.handleScroll(event));
  }

  handleScroll(event) {
    const currentScrollPosition = document.documentElement.scrollTop;
    if (!this.flug) {
      requestAnimationFrame(() => {
        this.flug = false;
        // if (this.goalPosition < currentScrollPosition) {
        //   if(!this.goalAnimated) {
        //     this.goalAnimated = true
        //     TweenMax.to(this.goalElement, 1.5, {opacity: 1, y: -100});
        //   }
        // }
      });
      this.flug = true;
    }
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
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '100px' }}>
                <Col span={20} style={{ height: '150px', backgroundColor: '#fcfcfc' }}>
                <p>What I do -</p>
                <h1>Product</h1>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle" gutter={24} style={{ marginTop: '100px' }}>

                <Col xs={24} sm={18} md={12} lg={12} xl={10} style={{ backgroundColor: '#fcfcfc' }}>
                  <div ref={div => this.goalElement = div} style={{ opacity: 0 }}>
                  <NavLink to="/product/goal">
                    <Card bordered={true} style={{ margin: '30px', backgroundColor: '#fcfcfc' }} cover={ <img alt="example" src={goalImage} />}>
                      <Meta
                        title={ <h3 style={{ textAlign: 'center' }}>Goal</h3> }
                        description={ <p style={{ textAlign: 'center' }}>This is an iOS app that you can save the place where you want to go on the map.</p> }
                      />
                    </Card>
                  </NavLink>
                  </div>
                </Col>
                <Col xs={24} sm={18} md={12} lg={12} xl={10} style={{ backgroundColor: '#fcfcfc' }}>
                  <div>
                  <NavLink to="/product/portfolio">
                    <Card bordered={true} style={{ margin: '30px', backgroundColor: '#fcfcfc' }} cover={ <img alt="example" src={portfolioImage} />}>
                      <Meta
                        title={ <h3 style={{ textAlign: 'center' }}>Portfolio</h3> }
                        description={ <p style={{ textAlign: 'center' }}>This is my portfolio site!!</p> }
                      />
                    </Card>
                  </NavLink>
                  </div>
                </Col>              
              </Row>
            </Content>
          </Layout>
        </div>
    );
  }
}

export default PortfolioProduct;
