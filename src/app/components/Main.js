'use strict';

import React from 'react';
import myData from '../data.json';
import Sidebar from './Sidebar';

console.log(myData);

export default class Main extends React.Component {
  render () {
    return(
      <div className="body">
        <div className="blogstuff">
        <h2>Main</h2>
        <h3>{myData[0].title}</h3>
        <h4>{myData[0].posted}</h4>
        <h4>tags: {myData[0].tags[0]}, {myData[0].tags[1]}, {myData[0].tags[2]}</h4>
        <p>{myData[0].contentA}</p>
        <p>{myData[0].contentB}</p>
        <p>{myData[0].contentC}</p>
        <h3>{myData[1].title}</h3>
        <h4>{myData[1].posted}</h4>
        <h4>tags: {myData[1].tags[0]}, {myData[1].tags[1]}, {myData[1].tags[2]}</h4>
        <p>{myData[1].contentA}</p>
        <p>{myData[1].contentB}</p>
        <p>{myData[1].contentC}</p>
        <h3>{myData[2].title}</h3>
        <h4>{myData[2].posted}</h4>
        <h4>tags: {myData[2].tags[0]}, {myData[2].tags[1]}, {myData[2].tags[2]}</h4>
        <p>{myData[2].contentA}</p>
        <p>{myData[2].contentB}</p>
        <p>{myData[2].contentC}</p>
        </div>
        <div className="sidebar">
        <Sidebar />
        </div>
      </div>
    );
  }
}
