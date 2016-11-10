'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render () {
    return(
      <header className="header">
        <div className="banner">
          <img src="src/app/images/Main.JPG" alt="Image of Main Street in Salt Lake City"/>
        </div>
        <div className="nav">
          <ul>
            <li><a href="#">CV</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </header>
    );
  }
}
