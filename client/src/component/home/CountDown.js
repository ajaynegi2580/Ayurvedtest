import { useState, useEffect } from "react";

import React from "react";

const CountDown = ({ CountDownnum }) => {
  let CountNumber = CountDownnum;
  const [count, setCount] = useState(CountNumber);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((preCount) => {
        if (preCount <= 1) {
          return CountNumber;
        }
        return preCount - 1;
      });
    }, 160);

    return () => {
      clearInterval(interval);
    };
  }, [CountNumber]);

  return <div>{count}</div>;
};

export default CountDown;
