'use strict';

import React from 'react';

export default class Sidebar extends React.Component {
  render () {
    return(
      <div className="clickers">
        <button>{this.props.data[0].posted}</button>
        <button >October</button>
        <button >"toast"</button>
        <button >"distillery"</button>
        <button >"vape"</button>
        <button >"meditation"</button>
        <button >"artisan"</button>
      </div>
    );
  }
}
