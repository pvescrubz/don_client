
import { useEffect, useState } from 'react';

export const useAnimatedCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.random() * 50 + 100;

    const timer = setInterval(() => {
      start += Math.ceil((end / duration) * incrementTime);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};