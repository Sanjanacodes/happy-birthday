function MessagePage() {
  return (
    <div className="message-card">
      <h2>✅ Access Fully Granted!</h2>
      <p>
        Welcome, Agent Love! 🎂 <br />
        You light up my life like a perfectly secured server. I love you more
        than encrypted packets on a clean network. 🛡️❤️
      </p>
      <p className="signature">
        Forever yours,
        <br />
        Your Partner in (Cyber)Crime 💋
      </p>
      <nav style={{ marginTop: "2rem" }}>
        <a className="nav-link" href="/images">
          📷 View Images
        </a>{" "}
        |{" "}
        <a className="nav-link" href="/videos">
          🎬 Watch Videos
        </a>{" "}
        |{" "}
        <a className="nav-link" href="/memories">
          📖 Memories
        </a>
      </nav>
    </div>
  );
}

export default MessagePage;
