import React, { Component } from 'react';
import { Home } from '../containers';
class Wall extends Component {
    
  render() {
    return (
      <Home username={this.props.match.params.username}></Home>
    )
  }
}

export default Wall;