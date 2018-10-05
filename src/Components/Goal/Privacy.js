import React, { Component } from 'react';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Goal/Privacy.css';


class Privacy extends Component {
  render() {
    return (
      <div className="privacyContent">
        <div className="privacyContent">
          <h1 id="title">iOSアプリケーション「GoaL」のプライバシーポリシー</h1>
          <p className="privacyText">2018/10/5</p>
        </div>
        <div className="privacyContent">
          <h1 className="mainTitle">個人情報の取り扱いについて</h1>
          <p className="privacyText">
            当アプリケーションでは、お客様が保存された位置情報を適切に管理するため、お客様の個人情報を収集させていただくことがございます。<br/>
            当社は、お客様からご提供いただく個人情報を、適切に保護することが重要であると認識し、<br/>
            経済産業省<a href="http://www.meti.go.jp/policy/it_policy/privacy/kojin_gadelane.html">「個人情報の保護に関する法律についての経済産業分野を対象としたガイドライン」</a>に基き、以下のように個人情報保護方針を定めます。
          </p>
          <h1 className="mainTitle">個人情報保護方針</h1>
            <h2 className="subPrivacyTitle">１．個人情報は適切に利用します</h2>
              <p className="privacyText">
                個人情報を本人の意思に反して収集、利用することは、権利の侵害になると共に、事業者としての信頼を失うことになります。<br/>
                そのため、個人情報の収集、利用等のルールを明文化し、適切な取扱いを行います。<br/>
                また、法的な要請を除き、本人の許可なく第三者に情報を開示・提供することはありません。
              </p>
            <h2 className="subPrivacyTitle">２．個人情報の厳正な管理を行います</h2>
              <p className="privacyText">
                個人情報の紛失、破壊、改ざん、および漏えい等を防止するため、不正アクセス対策、ウイルス対策等の情報セキュリティ対策を行い、適切に管理いたします。<br/>
                また、不要になった個人情報はすみやかに廃棄いたします。
              </p>
            <h2 className="subPrivacyTitle">３．法令およびその他の規範を遵守します</h2>
              <p className="privacyText">
                個人情報の取り扱いに関して、個人情報保護法をはじめとする個人情報に関する法令およびその他の規範を遵守します。
              </p>
            <h2 className="subPrivacyTitle">４．個人情報保護方針の継続的改善を行います</h2>
              <p className="privacyText">
                ここで定めた個人情報保護方針は、定期的に見直しを行い、継続的な改善を行います。<br/>
                また、個人情報保護方針とその運営に関して、疑問に思われる点や不都合な点等がありましたら、下記の問合わせ窓口までご連絡ください。<br/>
                検討を行い、適切に改善を行います。
              </p>
          <h1 className="mainTitle">本方針および当社の個人情報の取り扱いに関するお問合せ窓口</h1>
            <p className="privacyText">
              お問い合わせに関しましては下記のメールアドレスにお問い合わせください
            </p>
            <p className="privacyText">
              メールアドレス: exe.miyakura0629@gmail.com
            </p>
        </div>
      </div>
    )
  }
}

export default Privacy;
