import { Link } from "react-router-dom";

function MessagePage() {
  return (
    <div className="message-card">
      <img
        src="/it_is_your_birthday.jpg"
        alt="It is your birthday."
        style={{
          maxWidth: "100%",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "1.5rem",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          display: "flex",
        }}
      />
      <h2>✅ Access Granted.</h2>
      <p>
        Hello Birthday Boy 🎂 <br />
        The Jim to my Pam.
        <br /> The Chandler to my Monica.
        <br /> The Dwight to my Angela. <br />
        The Jake to my Amy. <br />
        The Ross to my Rachel. <br /> The Luke to my Lorelai. <br /> The Phil to
        my Claire.
        <br /> The Hulk to my Black Widow.
        <br /> The Kevin to my Captain Raymond Holt. <br />
        The Vision to my Wanda. <br />
        My best friend, my love. <br /> Happy Birthday, and happiest 'coz you
        have me huehue. ❤️
      </p>
      <p
        style={{
          color: "#de0b1dff",
          fontSize: "18px",
          // backgroundColor: "dark-yellow",
          fontFamily: "'Comic Sans MS', cursive",
          padding: "10px",
          border: "2px dotted green",
          display: "flex",
          justifyContent: "center",
          maxWidth: "700px",
        }}
      >
        I know it's a lame website, kya karein, I'm not that creative like you
        naa?
      </p>

      <p className="signature">
        Forever yours,
        <br />
        Your Partner in (Cyber)Crime 💋
      </p>
      <nav style={{ marginTop: "2rem" }}>
        <Link className="nav-link" to="/images">
          📷 View Images
        </Link>{" "}
        |{" "}
        <Link className="nav-link" to="/customGPTSaman">
          🤖 Chat with Saamaan
        </Link>{" "}
        |{" "}
        <Link className="nav-link" to="/customGPTSanjana">
          💬 Chat with Sanjana
        </Link>
      </nav>
    </div>
  );
}

export default MessagePage;
