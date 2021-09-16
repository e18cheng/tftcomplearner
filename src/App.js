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
  render() {
    return (
      <>
        {Constants.ChampionData.map((champion, i) => {
          return (
            <img
              src={
                process.env.PUBLIC_URL +
                "/champions/TFT5_" +
                champion.name.replace(/\s/g, "") +
                ".png"
              }
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
