import React from "react";

export class CheckAnswer extends React.Component {
  render() {
    return (
      <>
        <div>
          <button onClick={() => this.props.sendAnswerClick()}>
            Check Answer
          </button>
        </div>
        <p>Correct</p>
        {this.props.correct.map((champion, i) => {
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
        {this.props.incorrect_missed.map((champion, i) => {
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
        {this.props.incorrect_extra.map((champion, i) => {
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
}
