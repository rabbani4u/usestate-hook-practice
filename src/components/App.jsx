import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();

  const [time, currenTime] = useState(now);

  setInterval(updateTime, 1000);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    currenTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
