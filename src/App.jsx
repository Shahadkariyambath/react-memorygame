import { useEffect, useMemo, useState } from "react";
import "./App.css";

const gameEmoji = ["❤", "🎶", "🎂", "🎁"];

function App() {
  const [box, setBox] = useState([]);

  const isGameCompleted = useMemo(() => {
    if (box.length > 0 && box.every((data) => data.solved)) {
      return true;
    }
    return false;
  }, [picece]);

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

  const handleChnage = (data) => {
    const flippedBox = box.filter((data) => data.flipped && !data.solved);
    if (flippedBox.length === 2) return;

    const newBox = box.map((picece) => {
      if (data.position === picece.position) {
        picece.flipped = !picece.flipped;
      }
      return picece;
    });

    setBox(newBox);
  };

  const logicForFlipped = () => {
    const flippedBox = box.filter((data) => data.flipped && !data.solved);

    if (flippedBox.length === 2) {
      setTimeout(() => {
        if (flippedBox[0].emoji === flippedBox[1].emoji) {
          console.log("Success");
          setBox(
            box.map((data) => {
              if (
                flippedBox[0].position === data.position ||
                flippedBox[1].position === data.position
              ) {
                data.solved = true;
              }

              return data;
            })
          );
        } else {
          console.log("Failed");
          setBox(
            box.map((data) => {
              if (
                flippedBox[0].position === data.position ||
                flippedBox[1].position === data.position
              ) {
                data.flipped = false;
              }

              return data;
            })
          );
        }
      }, 800);
    }
  };

  const checkTheGameFinish = () => {
    if (box.every((data) => data.solved)) {
      console.log("Success");
    } else {
      console.log("Faild");
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    logicForFlipped();

    if (box.length > 0) {
      checkTheGameFinish();
    }
  }, [box]);

  console.log(box);

  return (
    <main>
      <h1>Memory Game in React</h1>
      <div className="container">
        {box.map((data, index) => (
          <div
            className={`flip-card ${
              data.flipped || data.solved ? "active" : ""
            }`}
            key={index}
            onClick={() => handleChnage(data)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front" />
              <div className="flip-card-back">{data.emoji}</div>
            </div>
          </div>
        ))}
      </div>
      {isGameCompleted && (
        <div className="winner-div">
          <h1>You Win</h1>
        </div>
      )}
    </main>
  );
}

export default App;
