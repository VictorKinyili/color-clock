import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1>Dynamic Color Clock</h1>
        <p className="time-display">
          {format(time, 'pp')}
        </p>
        <p className="date-display">
          {format(time, 'PPPP')}
        </p>
      </div>
    </div>
  );
}

export default App;