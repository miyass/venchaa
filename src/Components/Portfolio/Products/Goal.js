import React, { Component } from 'react';
import TweenMax from 'gsap/TweenMax';
import '../../../Styles/App.css';

import AppHeader from '../AppHeader';
import AppMobileHeader from '../AppMobileHeader';
import SNSMenu from '../SNSMenu';

import goalConceptImage from '../../../Images/goalConcept.png';
import goaLIconImage from '../../../Images/GoaLicon.png';

import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;

class Goal extends Component {

  constructor(props) {
    super(props);
    this.topElement = null;
    this.conceptElement = null;
    this.developmentElement = null;

    this.conceptPosition = 0;
    this.developmentPosition = 0;

    this.animatedAll = false;
    this.flug = false;
    this.conceptAnimated = false;
    this.developmentAnimated = false;
  }

  componentDidMount() {
    TweenMax.from(this.topElement, 1.5, {opacity: 0, y: 75});
    this.conceptPosition = this.conceptElement.getBoundingClientRect().top + window.pageYOffset - this.conceptElement.getBoundingClientRect().height;
    this.developmentPosition = this.developmentElement.getBoundingClientRect().top + window.pageYOffset - this.developmentElement.getBoundingClientRect().height;

    window.addEventListener('scroll', (event) => this.handleScroll(event));
  }

  handleScroll(event) {
    if(this.animatedAll) {
      return;
    }

    if ( this.conceptAnimated && this.developmentAnimated ) {
      this.animatedAll = true;
    }

    //ブラウザ環境で不安定な可能性あり
    const currentScrollPosition = document.documentElement.scrollTop;

    if (!this.flug) {
      requestAnimationFrame(() => {
        this.flug = false;
        if(this.developmentPosition < currentScrollPosition) {
          if(!this.developmentAnimated) {
            this.developmentAnimated = true
            TweenMax.to(this.developmentElement, 1.5, {opacity: 1, y: -75});
          }
        } else if (this.conceptPosition < currentScrollPosition) {
          if(!this.conceptAnimated) {
            this.conceptAnimated = true
            TweenMax.to(this.conceptElement, 1.5, {opacity: 1, y: -75});
          }
        }
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
              <div ref={div => this.topElement = div}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '100px' }}>
                <Col xs={16} sm={16} md={16} lg={16} xl={8}  style={{ textAlign: 'center'}}>
                <h1>GoaL</h1>
                <p style={{ color: '#a1a1a1' }}>iOS app / Mobile app</p>
                <img alt="example" src={goalConceptImage} style={{ width: '256px', height: '340px', marginTop: '50px' }} /><br />
                <a href="https://itunes.apple.com/jp/app/goal/id1437962693?mt=8" target="_blank" style={{ display: 'inline-block', overflow: 'hidden', background: 'url(https://linkmaker.itunes.apple.com/ja-jp/badge-lrg.svg?releaseDate=2018-10-05&kind=iossoftware&bubble=ios_apps) no-repeat', width: '135px', height: '40px', marginTop: '50px' }}></a>
                </Col>
              </Row>
              </div>
              <div ref={div => this.conceptElement = div} style={{ opacity: '0', marginTop: '300px' }}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '50px' }}>
                <Col span={20} style={{ backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <h2>- Concept -</h2>
                </Col>
                <Col xs={18} sm={14} md={16} lg={10} xl={10}  style={{ textAlign: 'left', marginTop: '50px'}}>
                  <p className="productText">‘GoaL’ is a mobile application to save the place where you want to go. </p>
                  <p className="productText">I use Google Map API, so you can get a same response when searching by Google Map.</p>
                  <br />
                  <p className="productText">I saved favorite place on Google Map so far. In this cace, There are a lot of cons… </p>
                  <br />
                  <p className="productText">1: I couldn’t be assigned to a category.</p>
                  <p className="productText">2: I couldn’t write a note for each favorite place</p>
                  <p className="productText">3: There are a lot of information on my Google Map. It’s complicated when using navigation functions</p>
                  <br />
                  <p className="productText">That’s why, I develop this iOS app that has many functions, such as being able to note and sort by category.</p>
                </Col>
              </Row>
              </div>
              <div ref={div => this.developmentElement = div} style={{ opacity: '0', marginTop: '250px' }}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '5px' }}>
                <Col span={20} style={{ height: '100px', backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <h2>- Development -</h2>
                </Col>
                <Col xs={14} sm={12} md={10} lg={8} xl={6} style={{ height: '300px', backgroundColor: '#fcfcfc', textAlign: 'center'}}>
                  <img src={goaLIconImage} style={{ width: '200px', height: '200px' }} />
                </Col>
                <Col xs={14} sm={12} md={10} lg={8} xl={6} style={{ height: '300px', backgroundColor: '#fcfcfc', textAlign: 'left'}}>
                  <p>Programming Language : Swift</p>
                  <p>Architecture: MVP Model</p>
                  <br />
                  <p>Development Period: 1 month</p>
                  <p>Development Persons: 1</p>
                  <br />
                  <p>Front-end: iOS</p>
                  <p>Back-end: firebase(database, auth)</p>
                  <br />
                  <p>Library: Mapbox, Google Maps API, SwiftyJSON</p>
                </Col>
              </Row>
              </div>
            </Content>
          </Layout>
        </div>
    );
  }
}

export default Goal;
