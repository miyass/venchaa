import React, { Component } from 'react';
import TweenMax from 'gsap/TweenMax';
import '../../../Styles/App.css';

import AppHeader from '../AppHeader';
import AppMobileHeader from '../AppMobileHeader';
import SNSMenu from '../SNSMenu';

import autocompleteKintoneImage from '../../../Images/autocompletekintoneIcon.png';
import goaLIconImage from '../../../Images/GoaLicon.png';

import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;

class AutocompleteKintone extends Component {

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
                <Col xs={20} sm={20} md={20} lg={20} xl={20}  style={{ textAlign: 'center' }}>
                <h1>autocomplete-kintone</h1>
                <p style={{ color: '#a1a1a1' }}>atom plugin</p>
                <img alt="example" src={autocompleteKintoneImage} style={{ width: '360px', height: '120px', marginTop: '80px', marginBottom: '80px' }} /><br />
                <a className="github-button" href="https://github.com/miyass/autocomplete-kintone" data-size="large" data-show-count="true" aria-label="Star miyass/autocomplete-kintone on GitHub">Star</a>
                </Col>
              </Row>
              </div>
              <div ref={div => this.conceptElement = div} style={{ opacity: '0', marginTop: '300px' }}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '50px' }}>
                <Col span={20} style={{ backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <h2>- Concept -</h2>
                </Col>
                <Col xs={18} sm={14} md={16} lg={10} xl={10}  style={{ textAlign: 'left', marginTop: '50px'}}>
                  <p className="productText">This is an autocomplete provider to write kintone API comfortably. Basically, we write a code with kintone API when customizing kintone app. kintone API code is too long, so it always makes me bothered.</p>
                  <br />
                  <p className="productText">That’s why I created atom plugin to write a code easily. You only need to type 'ke' or 'ka', all of code that you need is appeared. It can be not only writing a code automatically, but also providing for kintone event!</p>
                  <br />
                  <p className="productText">Japanese article is <a href="https://qiita.com/miyass/items/6e1f31ea2fea64b37ac0">here</a></p>
                </Col>
              </Row>
              </div>
              <div ref={div => this.developmentElement = div} style={{ opacity: '0', marginTop: '200px' }}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '5px' }}>
                <Col span={20} style={{ height: '100px', backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <h2>- Development -</h2>
                </Col>
                <Col xs={20} sm={20} md={20} lg={20} xl={20} style={{ height: '300px', backgroundColor: '#fcfcfc', textAlign: 'center'}}>
                  <p>Programming Language : JavaScript</p>
                  <br />
                  <p>Development Period: 2 weeks</p>
                  <p>Development Persons: 1</p>
                  <br />
                  <p>Library: Atom API</p>
                </Col>
              </Row>
              </div>
            </Content>
          </Layout>
        </div>
    );
  }
}

export default AutocompleteKintone;
