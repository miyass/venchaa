import React, { Component } from 'react';
import Lazyload from 'react-lazyload';

import '../../Styles/Portfolio/Style.css';
import '../../Styles/Portfolio/Main.css';
import '../../Styles/Portfolio/Portfolio.css';

import Image1 from '../../Images/Portfolio/image1.jpg';
import Image2 from '../../Images/Portfolio/image2.jpg';
import Image3 from '../../Images/Portfolio/image3.jpg';
import Image4 from '../../Images/Portfolio/image4.jpg';
import Image5 from '../../Images/Portfolio/image5.jpg';
import Image6 from '../../Images/Portfolio/image6.jpg';
import Image7 from '../../Images/Portfolio/image7.jpg';
import Image8 from '../../Images/Portfolio/image8.jpg';
import Image9 from '../../Images/Portfolio/image9.jpg';
import Image10 from '../../Images/Portfolio/image10.jpg';
import Image11 from '../../Images/Portfolio/image11.jpg';
import Image12 from '../../Images/Portfolio/image12.jpg';
import Image13 from '../../Images/Portfolio/image13.jpg';
import Image14 from '../../Images/Portfolio/image14.jpg';
import Image15 from '../../Images/Portfolio/image15.jpg';
import Image16 from '../../Images/Portfolio/image16.jpg';
import Image17 from '../../Images/Portfolio/image17.jpg';
import Image18 from '../../Images/Portfolio/image18.jpg';
import Image19 from '../../Images/Portfolio/image19.jpg';
import Image20 from '../../Images/Portfolio/image20.jpg';
import Image21 from '../../Images/Portfolio/image21.jpg';
import Image22 from '../../Images/Portfolio/image22.jpg';
import Image23 from '../../Images/Portfolio/image23.jpg';


export default class PhotoLoad extends Component {

  render() {
    const Photos = [
      { photo: Image1 },{ photo: Image2 },{ photo: Image3 },{ photo: Image4 },{ photo: Image5 },{ photo: Image6 },{ photo: Image7 },{ photo: Image8 },{ photo: Image9 },{ photo: Image10 },{ photo: Image11 },{ photo: Image12 },{ photo: Image13 },{ photo: Image14 },{ photo: Image15 },{ photo: Image16 },{ photo: Image17 },{ photo: Image18 },{ photo: Image19 },{ photo: Image20 },{ photo: Image21 },{ photo: Image22 },{ photo: Image23 },
    ]

    const photoList = [];

    for (var i = 0; i <= 22; i++) {
      photoList.push(
        <li className="photoList" key={i}>
          <Lazyload throttle={200} height={300}>
            <img src={Photos[i].photo} alt="" className="photo" />
          </Lazyload>
        </li>

      );
    }

    return (
      <ul className="photoLists">
        {photoList}
      </ul>
    );
  }
}
