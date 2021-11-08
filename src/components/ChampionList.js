import React from "react";

import * as Constants from "../constants.js";

export function ChampionList(props) {
  const { champListClick } = props;
  return (
    <>
      {Constants.champList.map((champion, i) => {
        return (
          <img
            src={
              process.env.PUBLIC_URL +
              "/champions/TFT5_" +
              champion.name.replace(/\s/g, "") +
              ".png"
            }
            onClick={() => champListClick(champion)}
            style={{ cursor: "pointer", width: 75, height: 75 }}
            alt={champion.name}
          />
        );
      })}
    </>
  );
}
