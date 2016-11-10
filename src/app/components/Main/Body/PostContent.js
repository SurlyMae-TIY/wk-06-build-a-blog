'use strict';

import React from 'react';

export default class Post extends React.Component {
  render () {
    return(
      <div>
        {this.props.data.map(function(paragraph, idx){
          return <p key={idx}>{paragraph}</p>
        })}
      </div>
    );
  }
}
