import "./App.css";

import React from "react";
import { Composition } from "./components/Composition.js";
import { ChampionSelector } from "./components/ChampionSelector.js";

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
