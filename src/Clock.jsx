import { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="clock">
      <h3>A clock app using useState Hook </h3>
      <span>{currentTime}</span>
    </div>
  );
};

export default Clock;
