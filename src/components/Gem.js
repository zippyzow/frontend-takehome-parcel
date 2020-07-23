import React, { Component } from 'react';
import '/css/Gem.css'
import { saveGem, removeGem } from "../helpers/storage";

class Gem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false
    }

    this.onSave = this.onSave.bind(this);
    this.onUnsave = this.onUnsave.bind(this);
  }

  onSave(event) {
    event.preventDefault();
    const gemData = this.props.gemData;

    // Only save the properties that are important.
    const gem = {
      name: gemData.name,
      version: gemData.version,
      info: gemData.info,
      uri: gemData.project_uri
    };

    saveGem(gem);

    this.setState({ saved: true });
  }

  onUnsave(event) {
    event.preventDefault();
    const gemData = this.props.gemData;

    removeGem(gemData);
  }

  render() {
    const {gemData, isSaved} = this.props;

    return (
      <div className="gem">
        <div className="gem__gemData">
          <a href={gemData.project_uri}>
            <div className="gem__nameAndVersion">
              <div className="gem__name">{gemData.name}</div>
              <div className="gem__version">{gemData.version}</div>
            </div>
            <div className="gem__info">{gemData.info}</div>
          </a>
        </div>
        <div className="gem__star">
          {isSaved ? (
            <form onSubmit={this.onUnsave}>
              <button type="submit" className="gem__saveButton">
                Unsave
              </button>
            </form>
          ) : (
            <form onSubmit={this.onSave}>
              <button type="submit" className="gem__saveButton">
                Save
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Gem;