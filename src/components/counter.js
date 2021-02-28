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
    <div>
      <h2>Balls</h2>
      <button
        onClick={() => setBalls(balls - 1)}
        className="plusMinus"
        type="submit"
      >
        Minus
      </button>
      {balls}
      <button onClick={incOverCounter} className="plusMinus" type="submit">
        Plus
      </button>
      <h2>Overs</h2>
      {overs}
    </div>
  );
};

export default Counter;
