import React from "react";

export function GuessList(props) {
  const { guess, guessListClick } = props;

  return (
    <>
      {guess.map((champion, i) => {
        return (
          <img
            src={
              process.env.PUBLIC_URL +
              "/champions/TFT5_" +
              champion.name.replace(/\s/g, "") +
              ".png"
            }
            onClick={() => guessListClick(champion)}
            style={{ cursor: "pointer", width: 75, height: 75 }}
            alt={champion.name}
          />
        );
      })}
    </>
  );
}
