import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Portfolio/Main.css';
import '../../Styles/Portfolio/Profile.css';

import profileImage from '../../Images/Portfolio/profile.png';

class Profile extends Component {
  render() {
    return (
      <section className="profile" id="profile">
        <Paper zDepth={5} className="profileContent">
          <div className="venchaaImageSmalls">
            <img src={profileImage} alt="" className="venchaaImageSmall" />
          </div>
          <h1 className="ptofileTitle">About me</h1>
          <div className="profileLeft">
            <h2 className="profileMyname">宮倉　宗平</h2>
            <h3 className="profileCareer">フロントエンジニア / システムエンジニア</h3>
            <p className="profileSent1">
              奈良県五條市出身/大阪府大阪市在住<br />
              立命館大学経営学部経営学科在籍(現在休学中)。現在は大学3年生。webサービス開発に興味があり、大学でマーケティングや財務について学ぶ傍ら、独学やインターンシップにてプログラミングも勉強中。将来の目標は自分のwebサービスを開発、運営すること。
            </p>
            <p className="profileSent2">
              現在は英語とプログラミングを深く学ぶためサンフランシスコに留学中。<br/>
            </p>
            <p className="profileSent3">
              趣味はカメラ、旅行、ゴルフ、Minecraft etc… <br/>
              最近好きなフレームワークはReactとExpress(Node)
            </p>
          </div>
          <div className="profileImage">
            <img src={profileImage} alt="" className="venchaaImage" />
          </div>
        </Paper>
      </section>
    );
  }
}

export default Profile;
