import React from "react";

export function CheckAnswer(props) {
  const { checkAnswerClick, correct, incorrectExtra, incorrectMissed } = props;

  return (
    <>
      <div>
        <button onClick={() => checkAnswerClick()}>Check Answer</button>
      </div>
      <p>Correct</p>
      {correct.map((champion, i) => {
        return (
          <img
            src={
              process.env.PUBLIC_URL +
              "/champions/TFT5_" +
              champion.replace(/\s/g, "") +
              ".png"
            }
            style={{ cursor: "pointer", width: 75, height: 75 }}
            alt={champion}
          />
        );
      })}
      <div></div>
      <p>Missed</p>
      {incorrectMissed.map((champion, i) => {
        return (
          <img
            src={
              process.env.PUBLIC_URL +
              "/champions/TFT5_" +
              champion.replace(/\s/g, "") +
              ".png"
            }
            style={{ cursor: "pointer", width: 75, height: 75 }}
            alt={champion}
          />
        );
      })}
      <div></div>
      <p>Extra</p>
      {incorrectExtra.map((champion, i) => {
        return (
          <img
            src={
              process.env.PUBLIC_URL +
              "/champions/TFT5_" +
              champion.replace(/\s/g, "") +
              ".png"
            }
            style={{ cursor: "pointer", width: 75, height: 75 }}
            alt={champion}
          />
        );
      })}
    </>
  );
}
