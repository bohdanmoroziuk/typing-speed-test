import { FC, useState, useEffect } from 'react';

import { increment } from 'utils';

interface TimerProps {
  startCounting: boolean;
  correctWords: number;
}

const Timer: FC<TimerProps> = ({ startCounting, correctWords }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  const tick = () => setTimeElapsed(increment);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (startCounting) {
      intervalId = setInterval(tick, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [startCounting]);
  
  const minutes = (timeElapsed / 60);
  const speed = ((correctWords / minutes) || 0).toFixed(2);

  return (
    <div className="timer">
      <p className="time">Time: {timeElapsed}</p>
      <p className="speed">Speed: {speed} WPM</p>
    </div>
  );
};

export default Timer;
