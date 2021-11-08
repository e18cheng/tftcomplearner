import React from "react";

import { ChampionList } from "./ChampionList.js";
import { GuessList } from "./GuessList.js";

export function ChampionSelector(props) {
  const { addGuessList, removeGuessList, guess } = props;

  const champListClick = (champion) => {
    var index = guess.indexOf(champion);
    if (index === -1) {
      addGuessList(champion);
    }
  };

  const guessListClick = (champion) => {
    var index = guess.indexOf(champion);
    if (index !== -1) {
      removeGuessList(champion);
    }
  };

  return (
    <>
      <GuessList guess={guess} guessListClick={guessListClick} />
      <hr></hr>
      <ChampionList champListClick={champListClick} />
    </>
  );
}
