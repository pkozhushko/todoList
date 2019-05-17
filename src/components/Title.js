import React, { Component } from 'react';
import logo from '../icons/main.png';
import '../css/title.css';

class Title extends Component {
  render() {
    return (
      <div className="title__wrapper">
        <img src={logo} className="title__logo" alt="logo"/>
        <div className="title-text__wrapper">
          <h1 className="title-text__header">Tasky</h1>
          <hr/>
          <p className="title-text__slogan">
            - Ваш особистий помічник, який допомагає залишатися зосередженими на цілях, проектах і щоденних завданнях
          </p>          
        </div>
      </div>
    );
  }
}

export default Title;
