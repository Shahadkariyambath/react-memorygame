import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Memory Game in React</h1>
      <div className="container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" />
            <div className="flip-card-back"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
