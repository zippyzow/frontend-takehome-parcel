import React, { Component } from 'react';
import '/css/Search.css';
import Gem from "./Gem";
import { loadSavedGems } from "../helpers/storage";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
      searchComplete: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ query: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const { query } = this.state;

    if (query === '') {
      return;
    }

    fetch(`http://localhost:3000/api/v1/search.json?query=${query}`)
      .then(response => response.json())
      .then(result => this.onSetResult(result, query));
  }

  onSetResult = (result, key) => {
    console.log(result.length < 0)
    this.setState({ results: result, searchComplete: true });
  }

  render() {
    const { results, query, searchComplete } = this.state;
    const savedGems = loadSavedGems();
    const noGemsFound = query.length > 0 && results.length <= 0 && searchComplete;

    return (
      <div>
        <div className="search">
          <form onSubmit={this.onSubmit}>
            <input
              type="text" value={query}
              onChange={this.onChange}
              className="search__input"
            />
            <button type="submit" className="search__submitButton">
              Submit
            </button>
          </form>
        </div>
        {noGemsFound ? (<div className="search__noGemsFound">No gems found</div>) : (<div>{results.map(result => (
          <Gem gemData={result} isSaved={result.name in savedGems} key={result.name} />
        ))}
        </div>)}

      </div>
    );
  }
}

export default Search;
