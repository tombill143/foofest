import React, { useEffect, useState } from "react";
import styles from "src/styles/Timer.module.css";

const useCountDown = (start) => {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("timer", counter.toString());
    }
  }, [counter]);

  return counter;
};

function Timer({ seconds }) {
  let initialCounter = seconds;

  if (typeof window !== "undefined" && window.localStorage) {
    const storedTimer = localStorage.getItem("timer");
    initialCounter = storedTimer ? parseInt(storedTimer) : seconds;
  }

  const timeLeft = useCountDown(initialCounter);

  return (
    <div className={styles.timercontainer}>
      <div className={styles.timertext}>
        <p>Reservation ends in</p>
        <div className={styles.timer}>{timeLeft}s</div>
      </div>
    </div>
  );
}

export default Timer;

