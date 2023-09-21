import React, { useState, useEffect } from "react";

export default function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };
  const formattedTime = currentDateTime.toLocaleTimeString([], timeOptions);

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="text-[54px]">{formattedTime}</div>
      <div>{currentDateTime.toDateString()}</div>
    </div>
  );
}
