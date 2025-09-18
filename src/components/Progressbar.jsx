import { useState, useEffect } from 'react';

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    // console.log("Intervel Set");
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      // console.log("Clearning up timer");
      clearInterval(interval);
    };
  }, [timer]);

  return <progress value={remainingTime} max={timer} />;
}