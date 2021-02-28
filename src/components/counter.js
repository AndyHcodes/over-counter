import React, { useState } from "react";

const Counter = () => {
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  const incOverCounter = () => {
    if (balls + 1 === 6) {
      setOvers(overs + 1);
      setBalls(balls - 5);
    } else {
      setBalls(balls + 1);
    }
  };
  return (
    <div className="counter">
      <h2>Balls</h2>
      <section className="balls">
        <button
          onClick={() => setBalls(balls - 1)}
          className="plusMinus"
          type="submit"
        >
          -
        </button>
        <div className="totals">{balls}</div>
        <button onClick={incOverCounter} className="plusMinus" type="submit">
          +
        </button>
      </section>
      <h2>Overs</h2>
      <div className="totals">{overs}</div>
    </div>
  );
};

export default Counter;
