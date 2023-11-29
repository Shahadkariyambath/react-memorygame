import { useEffect } from "react";
import "./App.css";

const gameEmoji = ["❤", "🎶", "🎂", "🎁", "❤", "🎶", "🎂", "🎁"];

function App() {
  const startGame = () => {
    const duplicateEmoji = [...gameEmoji, ...gameEmoji];
    console.log(duplicateEmoji);
  };

  useEffect(() => {
    startGame();
  }, []);

  // console.log(gameEmoji);
  return (
    <main>
      <h1>Memory Game in React</h1>
      <div className="container">
        {gameEmoji.map((data, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front" />
              <div className="flip-card-back">{data}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
