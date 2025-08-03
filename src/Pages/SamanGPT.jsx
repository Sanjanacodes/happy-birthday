import { useState } from "react";
import "./ChatGemini.css";

const ChatGemini = () => {
  const [question, setQuestion] = useState("");
  const [chats, setChats] = useState([]); // [{role: 'user'|'gemini', text: string}]
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError("");
    setChats((prev) => [
      ...prev,
      { role: "user", text: `Sanjana : ${question}` },
    ]);
    try {
      const res = await fetch("http://localhost:3001/ask-gemini/saikat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (data.answer) {
        setChats((prev) => [
          ...prev,
          { role: "gemini", text: `Saman : ${data.answer}` },
        ]);
      } else {
        setError("Error connecting to Saman");
      }
    } catch (err) {
      setError("Error connecting to Saman");
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  return (
    <div className="customGPTSaman">
      <h2>A very noob SamanGPT</h2>
      <div className="chat-window">
        {chats.map((chat, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${
              chat.role === "user" ? "user-bubble" : "gemini-bubble"
            }`}
          >
            <span>{chat.text}</span>
          </div>
        ))}
        {loading && (
          <div className="chat-bubble gemini-bubble loading">...</div>
        )}
      </div>
      <div className="chat-input-row">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          className="input-field"
          onKeyDown={(e) => e.key === "Enter" && !loading && handleAsk()}
          disabled={loading}
        />
        <button
          onClick={handleAsk}
          disabled={loading || !question.trim()}
          className="reveal-btn"
        >
          Send
        </button>
      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default ChatGemini;
