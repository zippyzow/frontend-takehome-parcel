import React, { Component } from 'react';
import '/css/Home.css';
import Header from '../components/Header';
import Search from '../components/Search';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <Header />
          <div className="home">
            <div className="home__title">
              Search for Ruby Gems
            </div>
            <Search />
          </div>
      </div>
    );
  }
}

export default Home;
