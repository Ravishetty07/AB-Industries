"use client";
import { useEffect, useState } from "react";

export default function AnimatedNumber({ value, duration = 1000 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / value));
    const timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{displayValue}</span>;
}
