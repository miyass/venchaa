import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Portfolio/Main.css';
import '../../Styles/Portfolio/Contact.css';

class Contact extends Component {
  render() {
    return(
      <section className="contact" id="contact">
        <Paper zDepth={5} className="contactContent">
          <h1 className="contactTitle">Contact</h1>
          <ul className="contactList">
            <li className="contactIcon facebookIcon">
              <a href="https://www.facebook.com/Vencha.Miyakura">
                <i className="fa fa-5x fa-facebook-square iconBig" aria-hidden="true"></i>
                <i className="fa fa-3x fa-facebook-square iconMedium" aria-hidden="true"></i>
                <i className="fa fa-2x fa-facebook-square iconSmall" aria-hidden="true"></i>
              </a>
            </li>
            <li className="contactIcon instaIcon">
              <a href="https://www.instagram.com/venchaaa/">
                <i className="fa fa-5x fa-instagram iconBig" aria-hidden="true"></i>
                <i className="fa fa-3x fa-instagram iconMedium" aria-hidden="true"></i>
                <i className="fa fa-2x fa-instagram iconSmall" aria-hidden="true"></i>
              </a>
            </li>
            <li className="contactIcon mailIcon">
              <a href="mailto:exe.miyakura0629@gmail.com">
                <i className="fa fa-5x fa-envelope iconBig" aria-hidden="true"></i>
                <i className="fa fa-3x fa-envelope iconMedium" aria-hidden="true"></i>
                <i className="fa fa-2x fa-envelope iconSmall" aria-hidden="true"></i>
              </a>
            </li>
            <li className="contactIcon githubIcon">
              <a href="https://github.com/miyass">
                <i className="fa fa-5x fa-github-alt iconBig" aria-hidden="true"></i>
                <i className="fa fa-3x fa-github-alt iconMedium" aria-hidden="true"></i>
                <i className="fa fa-2x fa-github-alt iconSmall" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </Paper>
      </section>
    );
  }
}

export default Contact
