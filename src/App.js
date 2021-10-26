import "./App.css";

import React from "react";
import * as Constants from "./constants.js";

import { Composition } from "./components/Composition.js";
import { ChampionSelector } from "./components/ChampionSelector.js";
import { CheckAnswer } from "./components/CheckAnswer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: null,
    };
  }

  getCompClick = () => {
    this.setState({
      comp: Constants.MetaComps[
        Math.floor(Math.random() * Constants.MetaComps.length)
      ],
    });
  };

  render() {
    return (
      <div>
        <h1>TFT Comps</h1>
        <Composition
          sendCompClick={this.getCompClick.bind(this)}
          comp={this.state.comp}
        />
        <ChampionSelector />
        <CheckAnswer />
      </div>
    );
  }
}

export default App;
