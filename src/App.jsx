import { useState } from "react";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="birthday-container">
      <div className="balloons">
        <div className="balloon red" />
        <div className="balloon blue" />
        <div className="balloon yellow" />
        <div className="balloon green" />
      </div>
      <h1 className="main-title">Happy Birthday, My Love! 🎉</h1>
      <p className="subtitle">
        Wishing you the happiest birthday, filled with love, laughter, and all
        your favorite things.
      </p>
      <button className="reveal-btn" onClick={() => setShowMessage(true)}>
        {showMessage ? "💖" : "Click to reveal your surprise!"}
      </button>
      {showMessage && (
        <div className="message-card">
          <h2>To the best boyfriend ever,</h2>
          <p>
            Every moment with you is a gift. I hope your birthday is as amazing
            as you are!
            <br />
            Here’s to more adventures, laughter, and memories together. I love
            you so much! 💕
          </p>
          <div className="confetti" />
        </div>
      )}
      <footer className="footer">Made with ❤️ by your girlfriend</footer>
    </div>
  );
}

export default App;
