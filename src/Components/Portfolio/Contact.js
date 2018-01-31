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
                <i className="fa fa-5x fa-facebook-square icon" aria-hidden="true"></i>
              </a>
            </li>
            <li className="contactIcon instaIcon">
              <a href="https://www.instagram.com/venchaaa/">
                <i className="fa fa-5x fa-instagram icon" aria-hidden="true"></i>
              </a>
            </li>
            <li className="contactIcon mailIcon">
              <i className="fa fa-5x fa-envelope icon" aria-hidden="true"></i>
            </li>
            <li className="contactIcon githubIcon">
              <a href="https://github.com/miyass">
                <i className="fa fa-5x fa-github-alt icon" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </Paper>
      </section>
    );
  }
}

export default Contact
