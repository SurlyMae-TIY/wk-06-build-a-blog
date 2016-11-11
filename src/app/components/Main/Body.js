'use strict';

import React from 'react';

import Post from './Body/PostContent';

export default class Body extends React.Component {
  render () {
    return(
        <div className="body">
        <hr />
        {this.props.data.map((entry, idx) => {
          return (<div key={idx}>
          <h3 className="entry-title"> {entry.title}</h3>
          <p className="entry-content"> {entry.posted.map((val, idx) => {
              return <span key={idx}>{val}</span>
            })}</p>
          <Post data={entry.content}/>
          <p>Tags: {entry.tags.map((tag, idx) => {
              return <button key={idx}>{tag}</button>
            })}</p>
        </div>)
        })}
        </div>
    );
  }
}
