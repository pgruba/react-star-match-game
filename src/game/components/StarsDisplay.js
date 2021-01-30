import utils from "./../../libs/utils";
import React from 'react';

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((o) => (
        <div key={o} className="star" />
      ))}
    </>
  );
};

export default StarsDisplay;
