require('./index.less');

import React, { Component } from 'react';

class Index extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div>
            <img style={{width: '100px', height: '100px'}} src="/src/assets/images/logo.jpg" alt="" />
            <p>welcome to react for joyrun</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Index;
