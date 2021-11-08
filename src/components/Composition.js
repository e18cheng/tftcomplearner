import React from "react";

export function Composition(props) {
  const { onCompClick, comp } = props;
  return (
    <>
      <div>
        <button onClick={onCompClick}>Give Comp</button>
      </div>
      <div>
        <p>{comp}</p>
      </div>
    </>
  );
}
