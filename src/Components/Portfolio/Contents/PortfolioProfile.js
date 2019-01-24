import React, { Component } from 'react';
import TweenMax from 'gsap/TweenMax';
import '../../../Styles/App.css';
import AppHeader from '../AppHeader';
import AppMobileHeader from '../AppMobileHeader';
import SNSMenu from '../SNSMenu';

import profileImage from '../../../Images/profile.png';
import NewYorkImage from '../../../Images/image8.jpg';

import { Layout, Timeline, Row, Col, Icon, Menu, Progress } from 'antd';
const { Content } = Layout;

class PortfolioProfile extends Component {
  constructor(props){
    super(props);
    this.topElement = null;
    this.topMobileElement = null;
    this.topImageElement = null;
    this.introElement = null;
    this.skillElement = null;
    this.careerElement = null;

    this.introPosition = 0;
    this.skillPosition = 0;
    this.careerPosition = 0;

    //全Animationが終了したら発火
    this.animatedAll = false;
    //各Animation
    this.flug = false;
    this.introAnimated = false;
    this.skillAnimated = false;
    this.careerAnimated = false;
  }

  componentDidMount() {
    TweenMax.from(this.topElement, 2, {opacity: 0, y: 75});
    TweenMax.from(this.topMobileElement, 2, {opacity: 0, y: 75});
    TweenMax.from(this.topImageElement, 2, {opacity: 0, top: '15%'});
    this.introPosition = this.introElement.getBoundingClientRect().top + window.pageYOffset - this.introElement.getBoundingClientRect().height;
    this.skillPosition = this.skillElement.getBoundingClientRect().top + window.pageYOffset - this.skillElement.getBoundingClientRect().height;
    this.careerPosition = this.careerElement.getBoundingClientRect().top + window.pageYOffset - this.careerElement.getBoundingClientRect().height;

    window.addEventListener('scroll', (event) => this.handleScroll(event));
  }

  handleScroll(event) {

    if(this.animatedAll) {
      console.log("all");
      return;
    }

    if ( this.introAnimated && this.careerAnimated && this.skillAnimated ) {
      this.animatedAll = true;
    }

    //ブラウザ環境で不安定な可能性あり
    const currentScrollPosition = document.documentElement.scrollTop;
    if (!this.flug) {
      requestAnimationFrame(() => {
        this.flug = false;
        if(this.careerPosition < currentScrollPosition) {
          if(!this.careerAnimated) {
            this.careerAnimated = true
            TweenMax.to(this.careerElement, 1.5, {opacity: 1, y: -100});
          }
        } else if(this.skillPosition < currentScrollPosition) {
          if(!this.skillAnimated) {
            this.skillAnimated = true
            TweenMax.to(this.skillElement, 1.5, {opacity: 1, y: -100});
          }
        } else if(this.introPosition < currentScrollPosition) {
          if(!this.introAnimated) {
            this.introAnimated = true
            TweenMax.to(this.introElement, 1.5, {opacity: 1, y: -100});
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
              <img ref={div => this.topImageElement = div} className="topImage" src={NewYorkImage} style={{ width: '600px', position: 'absolute', top: '25%', right: '15%' }} />
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '100px' }}>
                <Col span={20} style={{ height: '150px', backgroundColor: 'rgba(0,0,0,0)' }}>
                <p>Who I am -</p>
                <h1>Profile</h1>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle">
                <Col xs={0} sm={16} md={16} lg={16} xl={16}  style={{ backgroundColor: 'rgba(0,0,0,0)', textAlign: 'left', paddingTop: '0px', paddingRight: '50px', paddingBottom: '200px'}}>
                  <div ref={div => this.topElement = div}>
                  <h1 style={{ fontSize: '90px' }}>Hello!!</h1>
                  <h1 style={{ fontSize: '90px' }}>I'm Vencha</h1>
                  </div>
                </Col>
                <Col xs={16} sm={0} md={0} lg={0} xl={0}  style={{ backgroundColor: 'rgba(0,0,0,0)', textAlign: 'left', paddingTop: '0px', paddingRight: '50px', paddingBottom: '50px'}}>
                  <div ref={div => this.topMobileElement = div}>
                  <h1 style={{ fontSize: '70px' }}>Hello!!</h1>
                  <h1 style={{ fontSize: '70px' }}>I'm Vencha</h1>
                  </div>
                </Col>

              </Row>
              <div ref={div => this.introElement = div} style={{ opacity: 0, marginTop: '200px' }}>
              <Row type="flex" justify="center" align="middle">
                <Col span={20} style={{ backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <h2>- About Me -</h2>
                </Col>
                <Col xs={16} sm={16} md={16} lg={10} xl={10} style={{ height: '300px', backgroundColor: '#fcfcfc', textAlign: 'center', paddingTop: '50px', marginTop: '30px' }}>
                  <img src={profileImage} style={{ width: '200px', height: '200px' }} />
                </Col>
                <Col xs={16} sm={16} md={16} lg={10} xl={10} style={{ height: '300px', backgroundColor: '#fcfcfc', textAlign: 'left', paddingLeft: '30px', marginTop: '30px' }}>
                  <h2 style={{ marginBottom: 0 }}>Sohei Miyakura</h2>
                  <h4 style={{ color: '#a1a1a1' }}>Frontend Engineer / Mobile Engineer</h4>
                  <br />
                  <p>Age: 23</p>
                  <p>College: Ritsumeikan Univ.</p>
                  <p>Hobby: Travel. Camera, Running …</p>
                  <br />
                  <p>I’m a front-end engineer to develop various application with JavaScript.</p>
                  <p>Currently, I’m working Life is Tech inc, as an internship. I teach teenagers how to develop iOS app and Game with Unity.</p>
                  <p>In the next year, I will work Cybozu inc, as a system integrator.</p>
                  <br />
                  <p>My current focus is on iOS app development with swift.</p>
                </Col>
              </Row>
              </div>
              <div ref={div => this.skillElement = div} style={{ opacity: '0', marginTop: '200px' }}>
                <Row type="flex" justify="center" align="middle">
                  <Col span={20} style={{ backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                    <h2>- Skill -</h2>
                    <Row type="flex" justify="center" align="middle">
                      <Col xs={20} sm={20} md={8} lg={8} xl={6} style={{ marginTop: '30px' }}>
                        <h3>Web App</h3>
                        <Row type="flex" justify="center" align="middle" style={{ marginTop: '0px' }}>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={90} format={() => '9'} width={75} strokeWidth={16} strokeColor={'#e34f26'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>HTML/CSS</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={80} format={() => '8'} width={75} strokeWidth={16} strokeColor={'#F0DB4F'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>JavaScript</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={40} format={() => '4'} width={75} strokeWidth={16} strokeColor={'#68A063'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>Node.JS</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={20} sm={20} md={8} lg={8} xl={6} style={{ marginTop: '30px' }}>
                        <h3>Moblie App</h3>
                        <Row type="flex" justify="center" align="middle" style={{ marginTop: '0px' }}>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={70} format={() => '7'} width={75} strokeWidth={16} strokeColor={'#ff9900'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>Swift / iOS</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={50} format={() => '5'} width={75} strokeWidth={16} strokeColor={'#222c37'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>Unity</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={40} format={() => '4'} width={75} strokeWidth={16} strokeColor={'#9feaf9'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>Electron</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={20} sm={20} md={8} lg={8} xl={6} style={{ marginTop: '30px' }}>
                        <h3>Design</h3>
                        <Row type="flex" justify="center" align="middle" style={{ marginTop: '0px' }}>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={50} format={() => '5'} width={75} strokeWidth={16} strokeColor={'#ff751c'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>illustrator</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={50} format={() => '5'} width={75} strokeWidth={16} strokeColor={'#00cafc'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>Photoshop</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={8} sm={8} md={20} lg={20} xl={20} style={{ marginTop: '20px' }}>
                            <Row type="flex" justify="center" align="middle">
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <Progress type="dashboard" percent={60} format={() => '6'} width={75} strokeWidth={16} strokeColor={'#3df0f0'} />
                              </Col>
                              <Col xs={20} sm={20} md={20} lg={10} xl={10} style={{ marginTop: '20px' }}>
                                <p>Lightroom</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div ref={div => this.careerElement = div} style={{ opacity: 0 }}>
              <Row type="flex" justify="center" align="middle" style={{ marginTop: '200px' }}>
                <Col span={20} style={{ backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <h2>- Career -</h2>
                  <Timeline mode="alternate" style={{ marginTop: '50px' }}>
                    <Timeline.Item dot={<Icon type="user" style={{ fontSize: '25px', backgroundColor: '#fcfcfc' }} />}>
                      1995 - 06<br />
                      I was born in Nara, Japan
                    </Timeline.Item>
                    <Timeline.Item color="red" style={{paddingTop: '50px'}}>
                      2014 - 04<br />
                      <p>I entered Ritsumeikan Univ.</p>
                    </Timeline.Item>
                    <Timeline.Item style={{paddingTop: '50px'}}>
                      2016 - 01<br />
                      I joined Student Organization named "Watnow".<br />
                      <h4>Watnow</h4>
                    </Timeline.Item>
                    <Timeline.Item color="green" style={{paddingTop: '50px'}}>
                      2016 - 04<br />
                      I worked Life is Tech Inc, as an internship<br />
                      <h4>Life is Tech</h4>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="rocket" style={{ fontSize: '25px', backgroundColor: '#fcfcfc' }} />}>
                      2017 - 04<br />
                      I started studying abroad in San Francisco
                    </Timeline.Item>
                    <Timeline.Item color="red">
                      2017 - 07<br />
                      I worked kintone corporation as an internship in San Francisco<br />
                      <h4>kintone corporation</h4>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="loading" style={{ fontSize: '25px' }} />}>
                      2019 - 04<br />
                      I will work Cybozu in Japan...
                    </Timeline.Item>
                  </Timeline>
                </Col>
              </Row>
              </div>
            </Content>
          </Layout>
        </div>
    );
  }
}

export default PortfolioProfile;
