import React from "react";

export class ChampionList extends React.Component {
    render() {
      return (
        <>
          {this.props.champList.map((champion, i) => {
            return (
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/champions/TFT5_" +
                  champion.name.replace(/\s/g, "") +
                  ".png"
                }
                onClick={() => this.props.champListClick(champion)}
                style={{ cursor: "pointer", width: 75, height: 75 }}
                alt={champion.name}
              />
            );
          })}
        </>
      );
    }
  }