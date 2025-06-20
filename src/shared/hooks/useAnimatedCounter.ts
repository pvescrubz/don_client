import { useEffect, useState } from "react";

export const useAnimatedCounter = (
  end: number,
  duration = 1200,
  hasStarted: boolean
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

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
  }, [end, duration, hasStarted]);

  return count;
};
