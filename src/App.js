import React, { Component } from 'react';
import './App.css';
import Gem from "./components/Gem";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    fetch(`http://localhost:3000/api/v1/search.json?query=${this.state.value}`)
      .then(res => {
        return res.json();
      }).then(data => {
        console.log(data);
        this.setState({ results: data });
    })

    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          Search for Ruby Gems
        </div>
        <div className="app__search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text" value={this.state.value}
              onChange={this.handleChange}
              className="app__searchInput"
            />
            <button type="submit" className="app__submitButton">
              Submit
            </button>
          </form>
        </div>
        <div>{this.state.results.map((result, i) => (
          <Gem gemData={result} key={i} />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
