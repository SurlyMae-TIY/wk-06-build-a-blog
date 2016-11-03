'use strict';

import React from 'react';

export default class Header extends React.Component {
  render () {
    return(
      <div className="header">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Archives</a></li>
            <li><a href="#">Profile</a></li>
        </ul>
      </div>
    );
  }
}
