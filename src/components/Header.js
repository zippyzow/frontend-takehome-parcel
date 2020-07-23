import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/css/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="header">
        <div className="header__nav">
          <Link to="/">Home</Link>
        </div>
        <div className="header__nav">
          <Link to="/saved">Saved Gems</Link>
        </div>
      </div>
    )
  }
}

export default Header;