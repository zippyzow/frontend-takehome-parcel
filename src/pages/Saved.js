import React, { Component } from 'react';
import Gem from "../components/Gem";
import { loadSavedGems } from "../helpers/storage";

class Saved extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const savedGems = loadSavedGems();
    const gemValues = Object.values(savedGems);
    console.log(savedGems);

    return (
      <div>
        Saved Gems
        <div>{gemValues.length > 0 ? (
            <div>{gemValues.map(gem => (
              <Gem gemData={gem} isSaved={true} key={gem.name } />
            ))}
            </div>
        ) : <div>You have no saved gems</div>}
        </div>
      </div>
    )
  }
}

export default Saved;