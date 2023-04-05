import React from "react";

const Counter = () => {
  return (
    <div className="counter-container">
      <p className="current-count">0</p>
      <div>
        <button className="btn">+</button>
        <button className="btn">-</button>
      </div>
    </div>
  );
};

export default Counter;
