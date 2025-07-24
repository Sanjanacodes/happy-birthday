import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReveal = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowMessage(true);
    }, 2000); // simulate "decryption"
  };

  return (
    <div className="birthday-container hacker-theme">
      <div className="terminal-header">[SECURE BIRTHDAY SERVER v1.0]</div>

      <div className="screen">
        <h1 className="main-title">🎂 INITIATING BIRTHDAY PROTOCOL 🎂</h1>
        <p className="subtitle">
          Identity Verified:{" "}
          <span className="highlight">
            My Favorite Cyber Security Specialist 💻
          </span>
        </p>

        {!showMessage && !loading && (
          <button className="reveal-btn" onClick={handleReveal}>
            Decrypt Birthday Message 🔐
          </button>
        )}

        {loading && <p className="loading-text">Decrypting payload... ⏳</p>}

        {showMessage && (
          <div className="message-card">
            <h2>💌 Secure Transmission Received</h2>
            <p>
              Hey love, your presence has infiltrated my life like the most
              beautiful exploit! 🐛❤️
              <br />
              On this day, a powerful force was born – one who firewalls my
              sadness, and penetrates my heart's deepest layers with love and
              laughter. 💘
              <br />
              May your logs be clean, your ports open to joy, and your heart
              DDoS’d with love! 🛡️
            </p>
            <p className="signature">
              With all my <span className="highlight">admin privileges</span>,
              <br />
              Your Girlfriend 💋
            </p>
          </div>
        )}
      </div>

      <footer className="footer">
        &lt;/&gt; Coded with ❤️ by your favorite threat actor 😉
      </footer>
    </div>
  );
}

export default App;
// Note: The code above is a playful take on a birthday greeting with a hacker theme.
