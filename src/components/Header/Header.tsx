import React from 'react';
import Color from 'stories/assets/colors.svg'
import './header.css';

const Header = (props: any) => (
  <header>
    <div className="wrapper">
      Header
      <img src={Color} alt="Header"/>
    </div>
  </header>
);

export default Header;