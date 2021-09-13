import "./App.css";

import React from "react";

const comps = [
  "Lucian",
  "Kayle",
  "Rangers",
  "Nocturne",
  "Fortnite Jax",
  "Abom + X",
  "Draven",
  "Vayne Reroll",
];

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
                value: comps[Math.floor(Math.random() * comps.length)],
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

function App() {
  return (
    <div>
      <h1>TFT Comps</h1>
      <Composition />
    </div>
  );
}

export default App;
