'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render () {
    return(
      <header className="header">
        <div className="banner">
          <img src="./app/images/GallivanR.jpg" alt=""/>
          <img src="./app/images/MoabR.jpg" alt=""/>
          <img src="./app/images/JazzArenaR.jpg" alt=""/>
          <img src="./app/images/SourdoughR.jpg" alt=""/>
          <img src="./app/images/WalkerCenterR.jpg" alt=""/>
        </div>
        <div className="nav">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/resume'>CV</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}
