import { useEffect, useState } from "react";

export const Tick = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It's currently { date }.</h2>
    </div>
  );
}

