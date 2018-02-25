import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Portfolio/Main.css';
import '../../Styles/Portfolio/Career.css';

import CareerImage from '../../Images/Portfolio/Career.svg';

class Career extends Component {
  render() {
    return (
      <section className="career" id="career">
        <Paper zDepth={5} className="careerContent">
          <img src={CareerImage} alt="" className="careerImage"/>
          <h1 className="careerTitle">Career</h1>
          <h2 className="careerSubtitle">Main Activity / 大学での主な活動</h2>
          <div className="careerMain">
            <div className="watnow">
              <h3 className="careerMainTitle careerLine1">Watnow</h3>
              <p className="careerMainSent">
                2016/1 ~ 2018/2<br />
                学生向けのスマートフォンアプリやwebサービス開発を中心に活動する学生団体「Watnow」に参加。時間割を自動で取得することができるスマートフォンアプリ「Orario」の開発、広報に携わってきました。watnowでは、新しいサービスの企画立案、新人研修、Ruby on Railsを使ったサーバーサイドの実装など幅広く関わってきました。
              </p>
              <p className="careerMainSent">
                <a href="http://www.watnow.jp/">Watnow Pageへ</a>
              </p>
            </div>
            <div className="yokota">
              <h3 className="careerMainTitle careerLine2">横田ゼミ</h3>
              <p className="careerMainSent">
                2016/4 ~ 現在も活動中<br />
                私は立命館大学のゼミで「kintoneを使った情報システム開発」をテーマに、実際にkintoneを使ってNPO団体様向けの業務アプリケーションの作成を行なっています。kintoneとは、サイボウズ社が提供している様々な業務アプリケーションを作成することができるwebサービスです。
              </p>
              <p className="careerMainSent">
                「どうすれば快適にアプリケーションをお客様に使ってもらえるのか(UX)」を第一に考えてアプリケーションの制作を行っており、kintone上で快適に使ってもらえるUI,UXとはどんなデザインなのかについて現在も研究中です。
              </p>
            </div>
            <div className="lit">
              <h3 className="careerMainTitle careerLine1">Life is Tech</h3>
              <p className="careerMainSent">
                2016/4 ~ 現在も活動中<br />
                Life is Techという企業で、メンターとして中高生にwebデザインやゲーム作りなどを教えています。Javaを使ってMinecraftのMOD(改良データ)を製作するプログラミングコースやゲームエンジンのUnityを使ったゲームプログラミングコースなどを主に担当しています。
              </p>
              <p className="careerMainSent">
                現在はLife is Tech Leadersというメンターを育てる研修プログラムにて、Minecraft Programingコースの関西代表という立場で、講師メンターとしても活動中。
              </p>
            </div>
            <div className="kintone">
              <h3 className="careerMainTitle careerLine2">Kintone corporation</h3>
              <p className="careerMainSent">
                2017/7 ~ 2018/2<br />
                アメリカサンフランシスコにて、kintone corporationという企業でインターン。kintone corporationは日本サイボウズのUS支社で、kintoneの販売、およびカスタマイズなどを中心に活動しているスタートアップです。私はその中で、SE(システムエンジニア)として、US企業で実際に使っていただくkintoneアプリケーションの開発や、Javascriptを使ったカスタマイズなどを主な業務として活動しています。
              </p>
              <p className="careerMainSent">
                2018年1月より、UI/UXデザイナーとしても活動開始。現地でのユーザーインタビューなどの活動を行なっています。
              </p>
            </div>
          </div>
        </Paper>
      </section>
    );
  }
}

export default Career;
