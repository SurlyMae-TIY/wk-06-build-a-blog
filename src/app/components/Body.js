'use strict';

import React from 'react';

import Main from './Body/Main';
import Sidebar from './Body/Sidebar';


export default class Body extends React.Component {
  render () {
    return(
      <div className="body">
        <div className="main">
          <Main data={this.props.data}/>
        </div>
        <div className="sidebar">
          <Sidebar data={this.props.data}/>
        </div>
      </div>
    );
  }
}
