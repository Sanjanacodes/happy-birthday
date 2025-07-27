import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import MessagePage from "./Pages/MessagePage";
import ImagePage from "./Pages/ImagePages";

function App() {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (step === 1 && input.trim().toLowerCase() === "3000") {
      setStep(2);
      setInput("");
      setError("");
    } else if (step === 2 && input.trim().toLowerCase() === "2999") {
      setStep(3);
      setError("");
      navigate("/message"); // redirect after success
    } else {
      setError("Access Denied! Try again, agent.");
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="birthday-container hacker-theme">
            <div className="terminal-header">[SECURE BIRTHDAY SERVER v1.0]</div>
            <div className="screen">
              <h1 className="main-title">🎉 BIRTHDAY ACCESS CONTROL 🎉</h1>
              <p className="subtitle">
                {step === 3
                  ? "✅ AUTHENTICATED"
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
            </div>
            <footer className="footer">
              &lt;/&gt; Puzzle solved by the best hacker ever 🧠
            </footer>
          </div>
        }
      />

      <Route path="/message" element={<MessagePage />} />
      <Route path="/images" element={<ImagePage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/memories" element={<MemoriesPage />} />
    </Routes>
  );
}

function VideosPage() {
  return <h2>🎬 Videos of Us (you'll upload them!)</h2>;
}

function MemoriesPage() {
  return <h2>📖 Sweet memories and inside jokes!</h2>;
}

export default App;
