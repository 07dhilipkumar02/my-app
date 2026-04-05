import React, { useState } from "react";
import "./App.css";

function App() {
  const bestFriend = {
    name: "Dr Menaga Korangu 💫",
  };

  const messages = [
    `🌟Hey  ${bestFriend.name},  you’re the human version of sunshine! ☀️`,
  "🎉 Today is all about YOU! 🥳",
  "Cheers to the one who makes every moment fun and unforgettable 😎",
  "You're not just a friend, you're my chosen family ❤️",
  "Our inside jokes are priceless, and our memories are treasures 💎",
  "You make my life brighter, my laughter louder, and my heart happier 😊",
  "Through thick and thin, we've got each other 💪",
  "Life without you? Impossible! 🚫",
  "With you → Life = Adventure 🌟",
  "With you → Life = 100% Fun, 100% Love, 100% Legendary 💯🔥",
  "Forever grateful for a korangu like you 🐒💕",
  ];

  const [wish, setWish] = useState("");

  const generateWish = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setWish(randomMsg);
  };

  return (
    <div className="container">
      <h1>💖 Happy Birthday Losu 💖</h1>
      <h2>{bestFriend.name}</h2>

      <button onClick={generateWish}>
        🎁 Click me losu
      </button>

      {wish && <p className="wish">{wish}</p>}
    </div>
  );
}

export default App;