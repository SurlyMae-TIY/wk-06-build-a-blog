'use strict';

import React from 'react';

import Post from './Main/PostContent';

export default class Main extends React.Component {
  render () {
    return(
        <div className="main">
          <div>
          <h2>{this.props.data[2].title}</h2>
          <Post data={this.props.data[2].content} />
          </div>
          <div>
          <h2>{this.props.data[1].title}</h2>
          <Post data={this.props.data[1].content} />
          </div>
          <div>
          <h2>{this.props.data[0].title}</h2>
          <Post data={this.props.data[0].content} />
          </div>
        </div>
    );
  }
}
