import { useEffect, useState } from "react";
import "./App.css";

const gameEmoji = ["❤", "🎶", "🎂", "🎁"];

function App() {
  const [box, setBox] = useState([]);

  const startGame = () => {
    const duplicateEmoji = [...gameEmoji, ...gameEmoji];
    const newEmojiDuplicate = [];

    while (newEmojiDuplicate.length < gameEmoji.length * 2) {
      let index = Math.floor(Math.random() * duplicateEmoji.length);
      newEmojiDuplicate.push({
        emoji: duplicateEmoji[index],
        position: newEmojiDuplicate.length,
        solved: false,
        flipped: false,
      });

      duplicateEmoji.splice(index, 1);
    }
    console.log(newEmojiDuplicate);
    setBox(newEmojiDuplicate);
  };

  useEffect(() => {
    startGame();
  }, []);

  // console.log(gameEmoji);
  return (
    <main>
      <h1>Memory Game in React</h1>
      <div className="container">
        {box.map((data, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front" />
              <div className="flip-card-back">{data.emoji}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
