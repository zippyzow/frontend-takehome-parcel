import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Search for Ruby Gems
        </div>
        <input
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default App;
