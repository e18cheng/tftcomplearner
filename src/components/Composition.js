import React from "react";

export class Composition extends React.Component {
  compClick = () => {
    this.props.sendCompClick();
  };

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.compClick()}>Give Comp</button>
        </div>
        <div>
          <p>{this.props.comp}</p>
        </div>
      </>
    );
  }
}
