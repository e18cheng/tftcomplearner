import React from "react";

import * as Constants from "../constants.js";
import { ChampionList } from "./ChampionList.js";
import { GuessList } from "./GuessList.js";

export class ChampionSelector extends React.Component {
  constructor(props) {
    super(props);

    this.champList = [];
    Constants.ChampionData.forEach((champion) => {
      this.champList.push(champion);
    });
  }
  getChampListClick = (champion) => {
    var index = this.props.guess.indexOf(champion);
    if (index === -1) {
      this.props.addGuessList(champion);
    }
  };

  getGuessListClick = (champion) => {
    var index = this.props.guess.indexOf(champion);
    if (index !== -1) {
      this.props.removeGuessList(champion);
    }
  };

  render() {
    return (
      <>
        <GuessList
          top={this.props.guess}
          guessListClick={this.getGuessListClick}
        />
        <hr></hr>
        <ChampionList
          champList={this.champList}
          champListClick={this.getChampListClick}
        />
      </>
    );
  }
}
