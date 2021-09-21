import "./App.css";

import React from "react";
import * as Constants from "./constants.js";

class Composition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <>
        <div>
          <button
            onClick={() =>
              this.setState({
                value:
                  Constants.MetaComps[
                    Math.floor(Math.random() * Constants.MetaComps.length)
                  ],
              })
            }
          >
            Give Comp
          </button>
        </div>
        <div>
          <p>{this.state.value}</p>
        </div>
      </>
    );
  }
}

class ChampionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: [],
      bottom: [],
    };

    Constants.ChampionData.forEach((champion) => {
      this.state.bottom.push(champion);
    });
  }

  render() {
    const topClick = (champion) => {
      var index = this.state.top.indexOf(champion);
      if (index !== -1) {
        this.setState({
          top: this.state.top.filter(function (c) {
            return c !== champion;
          }),
        });
      }
    };
    const botClick = (champion) => {
      var index = this.state.top.indexOf(champion);
      if (index === -1) {
        this.setState({ top: [...this.state.top, champion] });
      }
    };

    return (
      <>
        {this.state.top.map((champion, i) => {
          return (
            <img
              src={
                process.env.PUBLIC_URL +
                "/champions/TFT5_" +
                champion.name.replace(/\s/g, "") +
                ".png"
              }
              onClick={() => topClick(champion)}
              style={{ cursor: "pointer", width: 75, height: 75 }}
              alt={champion.name}
            />
          );
        })}
        <hr></hr>
        {this.state.bottom.map((champion, i) => {
          return (
            <img
              src={
                process.env.PUBLIC_URL +
                "/champions/TFT5_" +
                champion.name.replace(/\s/g, "") +
                ".png"
              }
              onClick={() => botClick(champion)}
              style={{ cursor: "pointer", width: 75, height: 75 }}
              alt={champion.name}
            />
          );
        })}
      </>
    );
  }
}

function App() {
  return (
    <div>
      <h1>TFT Comps</h1>
      <Composition />
      <ChampionSelector />
    </div>
  );
}

export default App;
