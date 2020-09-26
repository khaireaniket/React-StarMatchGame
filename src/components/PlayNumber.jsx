import React from "react";

const PlayNumber = (props) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onNumberClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

// Color Theme
export const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

export default PlayNumber;
