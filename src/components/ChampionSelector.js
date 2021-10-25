import React from "react";

import * as Constants from "../constants.js";
import { ChampionList } from "./ChampionList.js";
import { GuessList } from "./GuessList.js";


export class ChampionSelector extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        top: [],
        bottom: [],
      };
  
      this.champList = [];
      Constants.ChampionData.forEach((champion) => {
        this.champList.push(champion);
      });
    }
    getChampListClick = (champion) => {
      var index = this.state.top.indexOf(champion);
      if (index === -1) {
        this.setState({ top: [...this.state.top, champion] });
      }
    };
  
    getGuessListClick = (champion) => {
      var index = this.state.top.indexOf(champion);
      if (index !== -1) {
        this.setState({
          top: this.state.top.filter(function (c) {
            return c !== champion;
          }),
        });
      }
    };
  
    render() {
      return (
        <>
          <GuessList
            top={this.state.top}
            sendGuessListClick={this.getGuessListClick.bind(this)}
          />
          <hr></hr>
          <ChampionList
            champList={this.champList}
            sendChampListClick={this.getChampListClick.bind(this)}
          />
        </>
      );
    }
  }