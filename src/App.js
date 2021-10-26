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
      guess: [],
    };
  }

  getCompClick = () => {
    this.setState({
      comp: Constants.MetaComps[
        Math.floor(Math.random() * Constants.MetaComps.length)
      ],
    });
  };

  getAddGuessList = (champion) => {
    this.setState({ guess: [...this.state.guess, champion] });
  };

  getRemoveGuessList = (champion) => {
    this.setState({
      guess: this.state.guess.filter(function (c) {
        return c !== champion;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>TFT Comps</h1>
        <Composition
          sendCompClick={this.getCompClick}
          comp={this.state.comp}
        />
        <ChampionSelector
          addGuessList={this.getAddGuessList}
          removeGuessList={this.getRemoveGuessList}
          guess={this.state.guess}
        />
        <hr></hr>
        <CheckAnswer 
          comp={this.state.comp}
          guess={this.state.guess}
        />
      </div>
    );
  }
}

export default App;
