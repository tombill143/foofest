
import styles from "src/styles/Timer.module.css";
import { useEffect, useState } from "react";

const useCountDown = (start) => {
  const [counter, setCounter] = useState(start);
  useEffect(() => {
    if (counter === 0) {
      return;
      // guess we're adding some uuuh a popup screen saying time is up 
    }
    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [counter]);
  return counter;
};

function Timer({ seconds }) {
  const timeLeft = useCountDown(seconds);
  return (

    <div className={styles.timercontainer}>
       <div className={styles.timertext}>
         <p>Reservation ends in</p>
         <div className={styles.timer}>{timeLeft}s</div>
       </div>
    </div>
  ) 

}

export default Timer;














// import { CountdownCircleTimer } from "react-countdown-circle-timer";

// // import "./styles.css";

// const renderTime = ({ remainingTime }) => {
//   if (remainingTime === 0) {
//     return <div className="timer">Too lale...</div>;
//   }

//   return (
//     <div className="timer">
//       <div className="text">Remaining</div>
//       <div className="value">{remainingTime}</div>
//       <div className="text">seconds</div>
//     </div>
//   );
// };

// function Timer() {
//   return (
//     <div className="App">
//       <h1>
//         CountdownCircleTimer
//         <br />
//         React Component
//       </h1>
//       <div className="timer-wrapper">
//         <CountdownCircleTimer
//           isPlaying
//           duration={10}
//           colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
//           colorsTime={[10, 6, 3, 0]}
//           onComplete={() => ({ shouldRepeat: true, delay: 1 })}
//         >
//           {renderTime}
//         </CountdownCircleTimer>
//       </div>
//       <p className="info">
//         Change component properties in the code filed on the right to try
//         difference functionalities
//       </p>
//     </div>
//   );
// }

// export default Timer;
