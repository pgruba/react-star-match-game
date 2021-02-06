import React from "react";

const PlayNumber = (props) => {
  return (
    <button className="number" 
        style={{backgroundColor: colors[props.status]}}
        onClick={() => props.onClick( props.number, props.status)}>
      {props.number}
    </button>
  );
};

export default PlayNumber;

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };