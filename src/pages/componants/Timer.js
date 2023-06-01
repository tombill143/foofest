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














// import styles from "src/styles/Timer.module.css";
// import { useEffect, useState } from "react";
// import { Thasadith } from "next/font/google";
// import { exportPathMap } from "../../../next.config";

// const useCountDown = (start) => {
//   const [counter, setCounter] = useState(start);
//   useEffect(() => {
 
//     const timer = setTimeout(() => {
//       setCounter(counter - 1);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [counter]);
//   return counter;
// };

// function Timer({ seconds }) {
//   const timeLeft = useCountDown(seconds);
//   return (

//     <div className={styles.timercontainer}>
//        <div className={styles.timertext}>
//          <p>Reservation ends in</p>
//          <div className={styles.timer}>{timeLeft}s</div>
//        </div>
//     </div>
//   ) 

// }

// export default Timer;


// function Timer({ seconds }) {
//   const storedTimer = localStorage.getItem("timer");
//   const initialCounter = storedTimer ? parseInt(storedTimer) : seconds;
//   const timeLeft = useCountDown(initialCounter);
// };


// // import styles from "src/styles/Timer.module.css";
// // import { useEffect, useState } from "react";

// // const useCountDown = (start) => {
// //   const [counter, setCounter] = useState(start);

// //   useEffect(() => {
// //     const storedTimer = localStorage.getItem("timer");
// //     const initialCounter = storedTimer ? parseInt(storedTimer) : start;

// //     const timer = setTimeout(() => {
// //       setCounter((previousCounter) => previousCounter - 1);
// //     }, 1000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem("timer", counter.toString());
// //   }, [counter]);

  

// //   return counter;
// // };

// // function Timer({ seconds }) {
// //   const timeLeft = useCountDown(seconds);

// //   return (
// //     <div className={styles.timercontainer}>
// //       <div className={styles.timertext}>
// //         <p>Reservation ends in</p>
// //         <div className={styles.timer}>{timeLeft}s</div>
// //       </div>
// //     </div>
// //   );
// // }



// // export default Timer;












// __________________________old code___________________________

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
