import React from "react";
import * as Constants from "../constants.js"

export class Composition extends React.Component {
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