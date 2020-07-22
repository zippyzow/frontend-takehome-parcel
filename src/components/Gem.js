import React, { Component } from 'react';
import '/css/Gem.css'

class Gem extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    console.log('SAVING')

    event.preventDefault();
  }

  render() {
    const gemData = this.props;

    return (
      <div className="gem">
        <div className="gem__gemData">
          <a href={gemData.gemData.project_uri}>
            <div className="gem__nameAndVersion">
              <div className="gem__name">{gemData.gemData.name}</div>
              <div className="gem__version">{gemData.gemData.version}</div>
            </div>
            <div className="gem__info">{gemData.gemData.info}</div>
          </a>
        </div>
        <div className="gem__star">
          <form onSubmit={this.handleSubmit}>
            <button type="submit" className="gem__saveButton">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Gem;