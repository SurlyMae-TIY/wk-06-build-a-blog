'use strict';

import React from 'react';
import Sidebar from './Body/Sidebar';
import Main from './Body/Main';



export default class Body extends React.Component {
  render () {
    return(
      <div className="body">
        <div className="main">
          <Main data={this.props.data}/>
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}
