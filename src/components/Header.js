import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '/css/Header.css';
import ruby from '/icons/ruby.svg';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: this should be a button that goes to Saved component
  render() {
    return(
      <div className="header">
        <div className="header__savedButton">
          <Link to="/saved">Saved Gems</Link>
        </div>
      </div>
    )
  }
}

export default Header;