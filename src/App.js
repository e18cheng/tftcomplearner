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
      correct: [],
      incorrect_extra: [],
      incorrect_missed: [],
    };
  }

  getCompClick = () => {
    const keys = Object.keys(Constants.MetaComps)
    this.setState({
      comp: keys[
        Math.floor(Math.random() * keys.length)
      ],
    });
    this.setState({ correct: [] });
    this.setState({ incorrect_extra: [] });
    this.setState({ incorrect_missed: [] });
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

  getAnswerClick = () => {
    if(this.state.comp == null) {
      return;
    }
    const answerNames = Constants.MetaComps[this.state.comp].sort();

    const correct = [];
    const incorrect_extra = [];
    const incorrect_missed = [];
    
    this.state.guess.forEach((champion) => {
      if (answerNames.includes(champion.name)) {
        correct.push(champion.name);
      } else {
        incorrect_extra.push(champion.name);
      }
    });

    answerNames.forEach((champion) => {
      if (!correct.includes(champion)) {
        incorrect_missed.push(champion);
      }
    });
    
    this.setState({ correct: correct });
    this.setState({ incorrect_extra: incorrect_extra });
    this.setState({ incorrect_missed: incorrect_missed });
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
          sendAnswerClick={this.getAnswerClick}
          correct={this.state.correct}
          incorrect_extra={this.state.incorrect_extra}
          incorrect_missed={this.state.incorrect_missed}
        />
      </div>
    );
  }
}

export default App;
