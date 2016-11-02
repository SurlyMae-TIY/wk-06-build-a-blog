'use strict';

import React from 'react';
import myData from '../data.json';
//
console.log(myData);

export default class Main extends React.Component {
  render () {
    return(
      <div>
        <h2>Blog Posts</h2>
        <div>blogInfo</div>
        <div>Sidebar area</div>
      </div>
    );
  }
}
