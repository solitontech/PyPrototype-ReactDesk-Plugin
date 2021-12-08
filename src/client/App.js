import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: 'World' }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <div>
          {/* TODO: List of buttons populated dynamically from a config file/ API call */}
          <button>
            <a href="plugins/abc">ABC</a>
          </button>
          <button>
            <a href="plugins/xyz">XYZ</a>
          </button>
          <button>
            <a href="plugins/qwe">QWE</a>
          </button>
        </div>
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
