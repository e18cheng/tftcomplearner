import "./App.css";

import React, { useState } from "react";
import * as Constants from "./constants.js";

import { Composition } from "./components/Composition.js";
import { ChampionSelector } from "./components/ChampionSelector.js";
import { CheckAnswer } from "./components/CheckAnswer.js";

function App(props) {
  const [comp, setComp] = useState();
  const [guess, setGuess] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [incorrectExtra, setIncorrectExtra] = useState([]);
  const [incorrectMissed, setIncorrectMissed] = useState([]);

  const onCompClick = () => {
    const keys = Object.keys(Constants.MetaComps);

    setComp(keys[Math.floor(Math.random() * keys.length)]);

    setCorrect([]);
    setIncorrectExtra([]);
    setIncorrectMissed([]);
  };

  const addGuessList = (champion) => {
    setGuess([...guess, champion]);
  };

  const removeGuessList = (champion) => {
    setGuess(
      guess.filter((c) => {
        return c !== champion;
      })
    );
  };

  const checkAnswerClick = () => {
    if (comp == null) {
      return;
    }
    const answerNames = Constants.MetaComps[comp].sort();

    const correct = [];
    const incorrect_extra = [];
    const incorrect_missed = [];

    guess.forEach((champion) => {
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

    setCorrect(correct);
    setIncorrectExtra(incorrect_extra);
    setIncorrectMissed(incorrect_missed);
  };

  return (
    <div>
      <h1>TFT Comps</h1>
      <Composition onCompClick={onCompClick} comp={comp} />
      <ChampionSelector
        addGuessList={addGuessList}
        removeGuessList={removeGuessList}
        guess={guess}
      />
      <hr></hr>
      <CheckAnswer
        checkAnswerClick={checkAnswerClick}
        correct={correct}
        incorrectExtra={incorrectExtra}
        incorrectMissed={incorrectMissed}
      />
    </div>
  );
}

export default App;
