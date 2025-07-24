import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (step === 1 && input.trim().toLowerCase() === "3000") {
      setStep(2);
      setInput("");
      setError("");
    } else if (step === 2 && input.trim().toLowerCase() === "2999") {
      setStep(3);
      setError("");
    } else {
      setError("Access Denied! Try again, agent.");
    }
  };

  return (
    <div className="birthday-container hacker-theme">
      <div className="terminal-header">[SECURE BIRTHDAY SERVER v1.0]</div>
      <div className="screen">
        <h1 className="main-title">🎉 BIRTHDAY ACCESS CONTROL 🎉</h1>
        <p className="subtitle">
          {" "}
          {step === 3
            ? "✅ AUTHENTICATED !!!"
            : "Authentication required to proceed... 🔐"}
        </p>

        {step < 3 && (
          <div className="puzzle-box">
            <p>
              <strong>Security Question:</strong>{" "}
              {step === 1
                ? "How much do I love you?"
                : "How much do you love me?"}
            </p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="input-field"
              placeholder="Enter love amount"
            />
            <button className="reveal-btn" onClick={handleSubmit}>
              Submit
            </button>
            {error && <p className="error-text">{error}</p>}
          </div>
        )}

        {step === 3 && (
          <div className="message-card">
            <h2>✅ Access Fully Granted!</h2>
            <p>
              Welcome, Agent Love! 🎂 <br />
              Your mission, should you choose to accept it: Enjoy your day to
              the fullest! 💖
              <br />
              <br />
              Here's your secret birthday message:
              <br />
              You light up my life like a perfectly secured server — stable,
              strong, and impossible to replace.
              <br />I love you more than encrypted packets on a clean network.
              🛡️❤️
            </p>
            <p className="signature">
              Forever yours,
              <br />
              Your Partner in (Cyber)Crime 💋
            </p>
          </div>
        )}
      </div>

      <footer className="footer">
        &lt;/&gt; Puzzle solved by the best hacker ever 🧠
      </footer>
    </div>
  );
}

export default App;
