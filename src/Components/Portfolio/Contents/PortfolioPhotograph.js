import React, { Component } from 'react';
import axios from 'axios';
import '../../../Styles/App.css';

import AppHeader from '../AppHeader';
import AppMobileHeader from '../AppMobileHeader';
import SNSMenu from '../SNSMenu';

import NewYorkImage from '../../../Images/image8.jpg';
import NekoImage from '../../../Images/image9.jpg';
import CarImage from '../../../Images/image10.jpg';

import { Layout, Row, Col, Card } from 'antd';
const { Content } = Layout;
const { Meta } = Card;

class PortfolioPhotograph extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://photoslibrary.googleapis.com/v1/albums/AF1QipMD3wKmDllJedae70rAevJpsZSqSU7Jb7XNGvEE',
      access_token: 'AIzaSyDdretc2n4WiyMdoWOTiOkNSaIZsL111Hk'
    }).then((res) => {
      console.log(res);
    });
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
                <p>What I take -</p>
                <h1>Photograph</h1>
                </Col>
              </Row>

              <Row type="flex" justify="center" align="middle" style={{ marginTop: '50px' }}>
                <Col xs={24} sm={18} md={12} lg={12} xl={10} style={{ backgroundColor: '#fcfcfc' }}>
                  <Card hoverable bordered={false} style={{ margin: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.26)' }} cover={<img alt="example" src={NewYorkImage} />}>
                    <Meta
                      title="Statue of Liberty"
                      description="#America #Newyork #Travel East Coast"
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={18} md={12} lg={12} xl={10} style={{ backgroundColor: '#fcfcfc' }}>
                  <Card bordered={false} style={{ margin: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.26)' }} cover={<img alt="example" src={NekoImage} />}>
                    <Meta
                      title="Cat"
                      description="took in Mie"
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={18} md={12} lg={12} xl={10} style={{ backgroundColor: '#fcfcfc' }}>
                  <Card bordered={false} style={{ margin: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.26)' }} cover={<img alt="example" src={CarImage} />}>
                    <Meta
                      title="Car"
                      description="#Japan #Mie #Camp"
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={18} md={12} lg={12} xl={10} style={{ backgroundColor: '#fcfcfc' }}>
                  <Card hoverable bordered={false} style={{ margin: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.26)' }} cover={<img alt="example" src={NewYorkImage} />}>
                    <Meta
                      title="Statue of Liberty"
                      description="took in New York"
                    />
                  </Card>
                </Col>
              </Row>
            </Content>
          </Layout>
        </div>
    );
  }
}

export default PortfolioPhotograph;
