import React, { Component } from 'react';
import Gem from "../components/Gem";
import '/css/Saved.css';
import { loadSavedGems } from "../helpers/storage";
import Header from "../components/Header";

class Saved extends Component {
  constructor(props) {
    super(props);
  }

  onGemToggle = () => {
    // The state is the local storage.
    // So this is to get this component to re-render which will fetch the new local storage.
    this.setState({});
  }

  render() {
    const savedGems = loadSavedGems();
    const gemValues = Object.values(savedGems);

    return (
      <div className="saved">
        <Header />
        <div className="saved__title">
          Saved Gems
        </div>
        <div>{gemValues.length > 0 ? (
            <div>{gemValues.map(gem => (
              <Gem gemData={gem} isSaved={true} onGemToggle={this.onGemToggle} key={gem.name} />
            ))}
            </div>
        ) : <div className="saved__noSavedGems">You have no saved gems</div>}
        </div>
      </div>
    )
  }
}

export default Saved;