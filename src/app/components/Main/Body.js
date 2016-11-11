'use strict';

import React from 'react';

import Post from './Body/PostContent';

export default class Body extends React.Component {
  render () {
    return(
        <div className="body">
        {this.props.data.map((entry, idx) => {
          return (
          <div key={idx}>
          <br/>
          <hr />
          <h3 className="entry-title"> {entry.title}</h3>
          <p className="entry-content"> {entry.posted.map((val, idx) => {
              return <span key={idx}>{val}</span>
            })}</p>
          <br />
          <Post data={entry.content}/>
        </div>)
        })}
        </div>
    );
  }
}


{/*<p>Tags: {entry.tags.map((tag, idx) => {
    return <a key={idx}>{tag}</a>
  })}</p>*/}
