"use client";

import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return <div className="text-center" data-testid="clock">{time}</div>;
};
