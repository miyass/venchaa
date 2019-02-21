import React, { Component } from 'react';
// import '../Styles/App.css';


class App extends Component {
  render() {
    return (
      <div>
      <div className="privacyContent" style={{ marginTop: '50px', marginLeft: '30px', marginRight: '30px', padding: '30px', backgroundColor: 'white', borderRadius: '30px' }}>
        <div className="privacyContent">
          <h2 id="title">iOSアプリケーション「Ventaku」のプライバシーポリシー</h2>
          <p className="privacyText">2019/2/21</p>
          <p className="privacyText">本アプリではお客様の個人情報はお取り扱いしていません。</p>
        </div>
        <div className="privacyContent"　style={{ marginTop: '50px' }}>
          <h3 className="mainTitle">本アプリに関するお問合せ窓口</h3>
          <p className="privacyText">
          お問い合わせに関しましては下記までお問い合わせください
          </p>
          <p className="privacyText">
            <a href="http://www.venchaa.me/">お問い合わせ窓口</a>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
