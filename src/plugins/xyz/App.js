import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <button>
          <a href="/">Home</a>
        </button> 
        <p id='name'>Hello from Plugin <strong>XYZ</strong></p>
      </div>
    );
  }
}
